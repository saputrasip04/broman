import mysql from "mysql2/promise";

export interface MySQLConfig {
  host: string;
  port: number;
  user: string;
  password?: string;
  database: string;
}

export function getMySQLConfig(): MySQLConfig {
  return {
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD ?? "",
    database: process.env.MYSQL_DATABASE || "broman_db",
  };
}

let pool: mysql.Pool | null = null;

/**
 * Mengambil atau menginisialisasi MySQL connection pool untuk XAMPP
 */
export function getMySQLPool(): mysql.Pool {
  if (!pool) {
    const config = getMySQLConfig();
    const isCloud = config.host !== "localhost" && config.host !== "127.0.0.1";

    pool = mysql.createPool({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
      database: config.database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      connectTimeout: isCloud ? 10000 : 3000,
      ssl: isCloud || process.env.MYSQL_SSL === "true"
        ? { minVersion: "TLSv1.2", rejectUnauthorized: false }
        : undefined,
    });
  }
  return pool;
}

/**
 * Menjalankan query MySQL dengan penanganan error dan fallback aman
 */
export async function queryMySQL<T = any>(
  sql: string,
  params: unknown[] = []
): Promise<{ success: boolean; data: T[]; error?: string }> {
  try {
    const pool = getMySQLPool();
    const [rows] = await pool.query(sql, params);
    return { success: true, data: rows as T[] };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, data: [], error: message };
  }
}

/**
 * Memeriksa status kesehatan koneksi MySQL di XAMPP
 */
export async function checkMySQLStatus(): Promise<{
  connected: boolean;
  host: string;
  port: number;
  database: string;
  tablesCount: number;
  message: string;
}> {
  const config = getMySQLConfig();
  try {
    const pool = getMySQLPool();
    // Test ping sederhana
    const [rows] = (await pool.query(
      "SELECT count(*) as total FROM information_schema.tables WHERE table_schema = ?",
      [config.database]
    )) as [Array<{ total: number }>, any];

    const count = rows[0]?.total || 0;
    return {
      connected: true,
      host: config.host,
      port: config.port,
      database: config.database,
      tablesCount: count,
      message: `Terhubung ke MySQL XAMPP (${config.host}:${config.port}/${config.database}) dengan ${count} tabel.`,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return {
      connected: false,
      host: config.host,
      port: config.port,
      database: config.database,
      tablesCount: 0,
      message: `Koneksi MySQL XAMPP tidak aktif atau belum menyala: ${message}`,
    };
  }
}
