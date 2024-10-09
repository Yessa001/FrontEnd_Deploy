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
              <Image src="/images/instagram.png" alt="photo" width={200} height={200} />
              </a>
              <a href="#">
              <Image src="/images/linkedin.png" alt="photo" width={200} height={200} />
              </a>
              <a href="#">
              <Image src="/images/tiktok.png" alt="photo" width={200} height={200} />
              </a>
              <a href="#">
              <Image src="/images/youtube.png" alt="photo" width={200} height={200} />
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
              Tentang Website ini
              <a href="#">
              <Image src="/images/down-arrow.png" alt="photo" width={20} height={30} />
              </a>
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
                Website ini dibangun menggunakan perpaduan teknologi yang efektif, yaitu{" "}
                <strong>Python</strong> dengan <strong>Flask</strong> untuk backend,{" "}
                <strong>Bootstrap</strong> untuk frontend, dan <strong>MySQL</strong> sebagai
                database. Masing-masing teknologi memiliki keunggulannya dalam mendukung performa
                dan fungsionalitas aplikasi.
              </p>
              <h4 id="list-item-2">Apa itu Bootstrap?</h4>
              <p style={{ textAlign: "justify" }}>
                <strong>Bootstrap</strong> adalah sebuah framework front-end yang digunakan untuk
                mempermudah dan mempercepat proses pengembangan antarmuka pengguna (UI) yang
                responsif dan modern. Dikembangkan oleh tim di Twitter, Bootstrap menyediakan
                berbagai komponen desain yang siap pakai.
              </p>
              <h4 id="list-item-3">Apa itu Flask?</h4>
              <p style={{ textAlign: "justify" }}>
                <strong>Flask</strong> adalah framework web minimalis yang ditulis dalam bahasa
                pemrograman Python. Dikenal dengan kesederhanaannya, Flask dirancang untuk memudahkan
                pengembang membangun aplikasi web dengan cepat tanpa memerlukan banyak komponen
                tambahan.
              </p>
              <h4 id="list-item-4">Bagaimana cara membuat website ini?</h4>
              <p style={{ textAlign: "justify" }}>
                1. Install Python: Pastikan Python versi 3 terpasang.
                <br />
                2. Buat Virtual Environment: python -m venv venv
                <br />
                3. Install Flask: pip install Flask
                <br />
                4. Buat file app.py
                <br />
                5. Buat file index.html di folder templates.
                <br />
                6. Buat Database dan Tabel menggunakan Firebase.
                <br />
                7. Aktifkan virtual environment, lalu jalankan aplikasi: python app.py
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
