export default function AccountDeletion() {
  document.title = 'Penghapusan Akun - MailTalk';
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        textAlign: 'justify',
        lineHeight: '1.5',
        marginBottom: '50px',
        padding: 30,
      }}
    >
      <h4>Penghapusan Akun</h4>
      <br />
      <ul style={{ paddingLeft: 17 }}>
        <li>
          <h4>Langkah 1: Klik header MailTalk</h4>
          <p>
            Buka aplikasi MailTalk di perangkat Anda dan pastikan sudah masuk ke akun Anda. Di layar utama aplikasi,
            cari dan klik pada header MailTalk, yang terletak di bagian atas layar.
          </p>
          <br />
        </li>
        <li>
          <h4>Langkah 2: Klik nama Anda, untuk masuk ke halaman profil</h4>
          <p>
            Setelah mengklik header MailTalk, temukan dan klik pada nama Anda atau ikon pensil atau edit di sudut atau
            bagian mana pun yang mengindikasikan profil pengguna. Ini akan membawa Anda ke halaman profil pengguna.
          </p>
          <br />
        </li>
        <li>
          <h4>Langkah 3: Pilih tab dengan icon kotak sampah</h4>
          <p>Pada halaman profil, gulir ke kanan atau klik tab dengan ikon kotak sambah, atau bertuliskan 'delete'.</p>
          <br />
        </li>
        <li>
          <h4>Langkah 4: Lanjutkan dengan pengisian formulir untuk penghapusan akun</h4>
          <p>
            Setelah memilih tab kotak sampah, Anda perlu menyetujui risiko penghapusan akun. Klik atau centang opsi
            tersebut lalu lanjutkan dengan pengisian kata sandi verifikasi.
          </p>
          <br />
        </li>
      </ul>
      <p>
        Perlu diingat bahwa penghapusan akun akan diakukan otomatis setelah Anda memencet tombol terakhir pada proses
        penghapusan akun.
      </p>
    </div>
  );
}
