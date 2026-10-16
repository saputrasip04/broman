-- ============================================================================
-- seed.sql
-- BroMan: Initial Seed Data (Fase E & F, Mapel DBP & PSPT, 12 BAB, Feature Flags)
-- ============================================================================

-- 1. FASES
insert into fases (id, code, name, grade_levels)
values
  ('11111111-1111-1111-1111-111111111111', 'E', 'Fase E (Kelas X)', array['X']),
  ('22222222-2222-2222-2222-222222222222', 'F', 'Fase F (Kelas XI & XII)', array['XI', 'XII'])
on conflict (code) do nothing;

-- 2. MATA PELAJARAN
insert into mapel (id, fase_id, code, name, cp_source_ref)
values
  (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    '11111111-1111-1111-1111-111111111111',
    'DBP',
    'Dasar-dasar Broadcasting dan Perfilman',
    'V.48'
  ),
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    '22222222-2222-2222-2222-222222222222',
    'PSPT',
    'Produksi dan Siaran Program Televisi',
    'VI.125'
  )
on conflict (code) do nothing;

-- 3. ELEMEN & BAB (Fase E: E1 - E4)
-- Elemen E1
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'e1000000-0000-0000-0000-000000000001',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  1,
  'Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman',
  'Meliputi profesi dan level pekerjaan, basic job skills, K3, budaya kerja, technopreneur, peluang usaha, POS, dan kearifan lokal.',
  'Pada akhir fase E peserta didik mampu memahami profesi dan level pekerjaan di industri penyiaran dan perfilman, standar K3, budaya kerja, dan peluang usaha.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'b1000000-0000-0000-0000-000000000001',
  'e1000000-0000-0000-0000-000000000001',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'E1',
  1,
  'Dunia Kerja, Profesi, dan Bisnis di Bidang Broadcasting dan Perfilman',
  'Profesi & level pekerjaan, basic job skills, K3, budaya kerja, technopreneur, peluang usaha, POS, kearifan lokal sebagai ide produksi.',
  18,
  'published'
) on conflict (code) do nothing;

-- Elemen E2
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'e1000000-0000-0000-0000-000000000002',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  2,
  'Perkembangan Media, Teknologi, dan Industri serta Regulasi',
  'Meliputi analog ke digital, FTA & OTT, podcast, live streaming, streaming TV, web series, VOD, UU ITE, AI, dan regulasi penyiaran.',
  'Pada akhir fase E peserta didik mampu memahami perkembangan teknologi analog ke digital, platform new media, UU ITE, dan perkembangan AI di industri.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'b1000000-0000-0000-0000-000000000002',
  'e1000000-0000-0000-0000-000000000002',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'E2',
  2,
  'Perkembangan Media, Teknologi, Industri & Regulasi',
  'Analog ke digital, FTA & OTT, podcast, live streaming, streaming TV, web series, VOD, UU ITE, AI, dan regulasi media.',
  18,
  'published'
) on conflict (code) do nothing;

-- Elemen E3
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'e1000000-0000-0000-0000-000000000003',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  3,
  'Teknik Dasar Pengoperasian Peralatan Audio Visual',
  'Meliputi fotografi dasar, tata kamera, tata artistik, tata suara, dasar editing, dan praktik singkat penggunaan alat.',
  'Pada akhir fase E peserta didik mampu mengoperasikan peralatan dasar audio visual meliputi kamera, tata cahaya, tata suara, dan perangkat lunak editing.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'b1000000-0000-0000-0000-000000000003',
  'e1000000-0000-0000-0000-000000000003',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'E3',
  3,
  'Teknik Dasar Pengoperasian Peralatan Audio Visual',
  'Fotografi dasar, tata kamera, tata artistik, tata suara, dasar editing, dan prosedur perawatan alat.',
  24,
  'published'
) on conflict (code) do nothing;

-- Elemen E4
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'e1000000-0000-0000-0000-000000000004',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  4,
  'Teknik Dasar Proses Produksi dan Media Baru (New Media)',
  'Meliputi tahapan praproduksi, produksi, dan pascaproduksi sederhana sesuai POS lewat proyek audio visual.',
  'Pada akhir fase E peserta didik mampu menyimulasikan seluruh alur tahapan produksi audio visual dan new media sederhana.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'b1000000-0000-0000-0000-000000000004',
  'e1000000-0000-0000-0000-000000000004',
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'E4',
  4,
  'Teknik Dasar Proses Produksi & New Media',
  'Simulasi tahapan produksi sesuai POS lewat proyek audio visual sederhana dan publikasi platform digital.',
  24,
  'published'
) on conflict (code) do nothing;

-- ELEMEN & BAB (Fase F: F1 - F8)
-- Elemen F1
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000001',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  1,
  'Manajemen Produksi dan Siaran',
  'POS tahapan produksi, organisasi penyiaran, sumber daya, format & pola acara, target penonton, tren.',
  'Pada akhir fase F peserta didik mampu merencanakan dan mengelola tahapan produksi dan siaran program televisi.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000001',
  'f1000000-0000-0000-0000-000000000001',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F1',
  1,
  'Manajemen Produksi dan Siaran',
  'POS tahapan produksi, organisasi penyiaran, sumber daya, format & pola acara, target penonton, dan tren industri.',
  36,
  'published'
) on conflict (code) do nothing;

-- Elemen F2
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000002',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  2,
  'Penulisan Naskah Televisi',
  'Naskah jurnalistik & artistik, format, jenis, struktur naskah berita, talkshow, dokumenter, dan drama.',
  'Pada akhir fase F peserta didik mampu menulis naskah program televisi non-drama dan drama secara profesional.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000002',
  'f1000000-0000-0000-0000-000000000002',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F2',
  2,
  'Penulisan Naskah Televisi',
  'Naskah jurnalistik & artistik, format standar, jenis program, dan struktur naskah penyiaran.',
  36,
  'published'
) on conflict (code) do nothing;

-- Elemen F3
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000003',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  3,
  'Penyutradaraan Televisi',
  'Single & multicamera, analisis naskah, mise en scene, sinematografi, floor management, aba-aba sutradara.',
  'Pada akhir fase F peserta didik mampu menyutradarai produksi televisi single-camera dan multi-camera studio.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000003',
  'f1000000-0000-0000-0000-000000000003',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F3',
  3,
  'Penyutradaraan Televisi',
  'Single & multicamera, analisis naskah, mise en scene, sinematografi, dan komando sutradara.',
  40,
  'published'
) on conflict (code) do nothing;

-- Elemen F4
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000004',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  4,
  'Tata Kamera dan Tata Cahaya',
  'K3LH, komposisi & framing, kamera & camera support, peralatan & teknik pencahayaan 3-point lighting.',
  'Pada akhir fase F peserta didik mampu mengoperasikan kamera dan menata pencahayaan studio/luar ruang sesuai standar K3LH.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000004',
  'f1000000-0000-0000-0000-000000000004',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F4',
  4,
  'Tata Kamera dan Tata Cahaya',
  'K3LH, komposisi, pergerakan kamera, camera support, peralatan & teknik pencahayaan 3-titik.',
  40,
  'published'
) on conflict (code) do nothing;

-- Elemen F5
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000005',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  5,
  'Tata Suara Televisi',
  'K3LH, anatomi & jenis mikrofon, audio mixer, sound recorder, boom pole, blocking mikrofon.',
  'Pada akhir fase F peserta didik mampu merekam, menata, dan mengoperasikan audio siaran televisi.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000005',
  'f1000000-0000-0000-0000-000000000005',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F5',
  5,
  'Tata Suara Televisi',
  'K3LH, jenis mikrofon, audio mixer, sound recorder, blocking mic, dan perekaman audio lapangan.',
  32,
  'published'
) on conflict (code) do nothing;

-- Elemen F6
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000006',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  6,
  'Tata Artistik Televisi',
  'Breakdown naskah artistik, floorplan, sketsa set dekorasi, properti, wardrobe, make up, dan hair style.',
  'Pada akhir fase F peserta didik mampu merancang dan mewujudkan tata artistik panggung & studio TV.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000006',
  'f1000000-0000-0000-0000-000000000006',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F6',
  6,
  'Tata Artistik Televisi',
  'Breakdown naskah, floorplan studio, sketsa set, properti, kostum, tata rias, dan dekorasi.',
  32,
  'published'
) on conflict (code) do nothing;

-- Elemen F7
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000007',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  7,
  'Editing Audio dan Video',
  'Manajemen file, pemilihan software NLE, dokumen syuting & kerja editing, tahapan offline & online editing.',
  'Pada akhir fase F peserta didik mampu melakukan penyuntingan audio dan video siaran televisi.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000007',
  'f1000000-0000-0000-0000-000000000007',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F7',
  7,
  'Editing Audio dan Video',
  'Manajemen file aset, software NLE, dokumen editing, offline & online editing, titling, dan rendering.',
  36,
  'published'
) on conflict (code) do nothing;

-- Elemen F8
insert into elemen (id, mapel_id, order_no, name, description, cp_text)
values (
  'f1000000-0000-0000-0000-000000000008',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  8,
  'Penyiaran Online',
  'Konsep & rencana siaran live streaming online, poster & promosi digital, regulasi media sosial.',
  'Pada akhir fase F peserta didik mampu menyelenggarakan dan mempromosikan siaran online secara komprehensif.'
) on conflict do nothing;

insert into babs (id, elemen_id, mapel_id, code, order_no, title, summary, hours_allocation, status)
values (
  'bf000000-0000-0000-0000-000000000008',
  'f1000000-0000-0000-0000-000000000008',
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'F8',
  8,
  'Penyiaran Online',
  'Rencana siaran online streaming, poster promosi digital, platform OTT, dan regulasi konten siber.',
  28,
  'published'
) on conflict (code) do nothing;

-- 4. FEATURE FLAGS (Default: Aktif Global)
insert into feature_flags (key, label, description, scope, is_enabled)
values
  ('materi', 'Materi Belajar', 'Modul materi interaktif bertahap dan kartu pembelajaran', 'global', true),
  ('video', 'Video Pembelajaran', 'Video pembelajaran interaktif bersumber YouTube / storage', 'global', true),
  ('galeri', 'Galeri Gambar', 'Galeri foto peralatan, studio, dan contoh visual', 'global', true),
  ('kuis', 'Kuis Formatif', 'Kuis formatif otomatis dengan feedback instan', 'global', true),
  ('game', 'Game Edukatif', 'Permainan mencocokkan alat, flashcard, dan studio simulation', 'global', true),
  ('lkpd', 'Lembar Kerja Peserta Didik', 'LKPD daring dan dapat diekspor ke PDF', 'global', true),
  ('rpm', 'Rencana Pembelajaran Mendalam', 'RPM Kurikulum Merdeka untuk guru pengampu', 'global', true),
  ('bank_soal', 'Bank Soal', 'Pusat bank soal C1-C6 dan perakit paket ujian', 'global', true),
  ('ulangan', 'Ulangan & Asesmen Daring', 'Sistem ujian online terjadwal dengan timer server', 'global', true),
  ('tka', 'Simulasi TKA', 'Simulasi tes kompetensi keahlian broadcasting', 'global', true),
  ('leaderboard', 'Papan Peringkat', 'Leaderboard kuis dan game penyemangat belajar', 'global', true),
  ('progres', 'Pelacakan Progres', 'Pelacakan capaian belajar dan penguasaan KKTP', 'global', true)
on conflict (key, scope, scope_ref) do update set label = excluded.label, description = excluded.description;
