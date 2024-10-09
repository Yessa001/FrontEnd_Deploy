"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

interface UserData {
  name: string;
  npm: string;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => doc.data() as UserData);

        if (data.length > 0) {
          setUserData(data[0]);
        } else {
          setError("No user data found");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="identity">
        <div className="card">
        <Image src="/images/aku.jpeg" alt="photo" width={200} height={200} />
          <div className="info">
            {userData ? (
              <>
                <h2>
                  {userData.name}
                  <br />
                  {userData.npm}
                </h2>
                <p>
                  Saya adalah mahasiswa semester 5 di Universitas Teknologi
                  Yogyakarta. Saat ini, saya sedang mendalami bidang studi
                  Informatika dengan penuh semangat dan dedikasi. Selama masa
                  studi, saya telah terlibat dalam berbagai proyek dan kegiatan
                  yang memperkaya pengalaman akademis dan praktis saya. Saya
                  selalu berusaha untuk mengembangkan keterampilan dan
                  pengetahuan saya agar dapat berkontribusi secara positif di
                  masa depan.
                </p>
              </>
            ) : (
              <p>No data available</p>
            )}
            <div className="icons">
              <a href="#">
                <Image src="/images/instagram.png" alt="Instagram" width={50} height={50} />
              </a>
              <a href="#">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={50} height={50} />
              </a>
              <a href="#">
                <Image src="/images/tiktok.png" alt="TikTok" width={50} height={50} />
              </a>
              <a href="#">
                <Image src="/images/youtube.png" alt="YouTube" width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Scrollspy */}
      <section className="description">
        <div className="about-section row">
          <div className="col-8">
            <h2 style={{ fontSize: "20px", textDecorationLine: "underline", opacity: 0.8, color: "black" }}>
              Tentang Website ini!
            </h2>
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabIndex={0}
            >
              <h4 id="list-item-1">Teknologi yang digunakan?</h4>
              <p style={{ textAlign: "justify" }}>
              Proyek ini menggunakan <strong>Node.js</strong> sebagai runtime JavaScript yang memungkinkan eksekusi kode di sisi server. Pemilihan <strong>Node.js</strong> didasarkan pada kemudahan dalam melakukan deploy, karena banyak platform hosting seperti Vercel, Heroku, dan Netlify yang mendukung penyebaran aplikasi dengan cepat dan efisien. Selain itu, <strong>Node.js</strong> menawarkan kinerja tinggi berkat dukungan mesin V8 milik Google, serta arsitektur single-threaded dan non-blocking yang memungkinkan penanganan banyak permintaan secara bersamaan. Untuk manajemen data, proyek ini memanfaatkan <strong>Firebase</strong>, platform pengembangan aplikasi berbasis cloud yang menyediakan layanan seperti Realtime Database dan Firestore. <strong>Firebase</strong> memungkinkan penyimpanan dan pengambilan data secara real-time, yang sangat berguna untuk aplikasi yang memerlukan konsistensi data di seluruh pengguna. Dengan antarmuka yang intuitif dan sistem keamanan yang kuat, <strong>Firebase</strong> juga memberikan kemudahan dalam pengelolaan database serta kemampuan untuk skalabilitas seiring pertumbuhan pengguna. Untuk tampilan antarmuka pengguna, proyek ini menggunakan <strong>CSS</strong> dan <strong>Tailwind CSS</strong>, sebuah framework CSS berbasis utility-first yang mempercepat pengembangan desain antarmuka. Tailwind CSS memudahkan pengembang dalam menciptakan desain responsif yang terlihat baik di berbagai perangkat, sambil memastikan konsistensi melalui kelas-kelas yang terstandarisasi untuk margin, padding, warna, dan tipografi.
              </p>
              <h4 id="list-item-2">Apa itu Node.js?</h4>
              <p style={{ textAlign: "justify" }}>
                <strong>Node.js</strong> adalah sebuah runtime JavaScript yang memungkinkan eksekusi kode JavaScript di sisi server, di luar lingkungan browser. Dikembangkan oleh Ryan Dahl dan dirilis pada tahun 2009, <strong>Node.js</strong> menggunakan mesin V8 yang dikembangkan oleh Google, yang memungkinkan eksekusi kode JavaScript secara cepat dan efisien. Dengan fitur asynchronous dan event-driven, <strong>Node.js</strong> dirancang untuk menangani banyak operasi secara bersamaan tanpa memblokir eksekusi, menggunakan model pemrograman berbasis event yang memanfaatkan fungsi callback untuk menangani hasil dari operasi asinkron. Selain itu, <strong>Node.js</strong> bersifat single-threaded, tetapi mampu mengelola banyak koneksi secara bersamaan, sehingga mengurangi overhead yang biasanya terkait dengan threading dan memungkinkan penanganan ribuan koneksi simultan dengan efisiensi tinggi.
              </p>
              <h4 id="list-item-3">Apa itu Flask?</h4>
              <p style={{ textAlign: "justify" }}>
                <strong>Firebase</strong> Database adalah layanan basis data real-time yang disediakan oleh Google sebagai bagian dari platform Firebase, yang memungkinkan pengembang untuk menyimpan dan menyinkronkan data antara aplikasi dan pengguna secara real-time. Dengan <strong>Firebase</strong> Database, data disimpan dalam format JSON dan dapat diakses secara langsung dari klien, memungkinkan aplikasi untuk memperbarui dan menampilkan data tanpa perlu menyegarkan halaman.
              </p>
              <h4 id="list-item-4">Bagaimana cara membuat website ini?</h4>
              <p style={{ textAlign: "justify" }}>
                1. Install perangkat lunak yang diperlukan, seperti editor kode (misalnya Visual Studio Code), Node.js, dan NPM.
                <br />
                2. Inisialisasi proyek baru menggunakan terminal dengan perintah npm init untuk membuat file package.json.
                <br />
                3. Pasang framework yang akan digunakan, seperti Express untuk server atau framework front-end seperti React, dengan perintah npm install express atau npx create-react-app my-app.
                <br />
                4. Atur struktur folder proyek dengan membuat folder untuk kode sumber, file statis, dan komponen lain yang diperlukan.
                <br />
                5. Buat file server, misalnya server.js, dan tuliskan kode untuk mengatur server menggunakan framework yang dipilih. Pastikan untuk mengatur rute dasar untuk menangani permintaan.
                <br />
                6. Buat file HTML, CSS, dan JavaScript untuk antarmuka pengguna. Gunakan framework CSS seperti Bootstrap atau Tailwind untuk mempercepat proses desain.
                <br />
                7. Jika menggunakan Firebase, atur proyek Firebase, buat basis data, dan tambahkan konfigurasi Firebase ke dalam proyek untuk menyimpan dan mengambil data.
                <br />
                8. Jalankan aplikasi di lokal untuk melakukan pengujian. Gunakan alat pengujian untuk memastikan semua fitur berfungsi dengan baik dan tidak ada bug.
                <br />
                9. Siapkan akun di platform deployment seperti Vercel atau Netlify. Hubungkan repositori GitHub proyek untuk memudahkan deployment.
                <br />
                10. Setelah menghubungkan repositori, lakukan push ke GitHub. Platform deployment akan secara otomatis membangun dan mendistribusikan aplikasi Anda ke server.
                <br />
                11. Setelah website dideploy, lakukan pemeliharaan secara berkala dengan memperbarui konten, memperbaiki bug, dan menambah fitur baru sesuai kebutuhan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
