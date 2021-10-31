import React from "react";
import photo from "../components/galeri/Brl.jpg";

const Hakkımda = () => {
  return (
    <section className="hakkımda">
      <header> <h1>HAKKIMDA</h1> </header> 
      <div className="about">
        <div className="firstColumn">
          <img src={photo} alt="photo1" />
          <div className="personel">
            <div className="head headFirst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <h2>Kişisel</h2>
            </div>
            <div>
              <div>
                <label>Doğum Günü:</label>
                <p>22 Kasım 1987</p>
              </div>
              <div>
                <label>Eğitim Durumu:</label>
                <p>Lisans</p>
              </div>
              <div>
                <label>Askerlik:</label>
                <p>Muaf</p>
              </div>
              <div>
                <label>Çalışma Durumu:</label>
                <p>Çalışmıyor</p>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="educate">
            <div className="head headFirst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-book"
                viewBox="0 0 16 16"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <h2>Eğitim</h2>
            </div>
            <div>
              <ul className="educateUl">
                <li>
                  Anadolu Üniversitesi <small>(2021-)</small>
                </li>
                <p>
                  Web Tasarımı ve Kod <small>(Öğrenci)</small>{" "}
                </p>
                <li>
                  Polis Akademisi <small>(2008-2012)</small>
                </li>
                <p>
                  Güvenlik Birimleri <small>(Mezun)</small>{" "}
                </p>
                <li>
                  ODTÜ <small>(2007-2008)</small>
                </li>
                <p>
                  Fen Bilgisi Öğretmenliği <small>(Terk)</small>{" "}
                </p>
              </ul>
            </div>
          </div>

          <hr />
          <div className="jobs">
            <div className="head headFirst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>
              <h2>İş Deneyimleri</h2>
            </div>
            <div className="job">
              <div>
                <h2>
                  Mete Panel <span>(2020-2021)</span>
                </h2>
                <h3>- Depo – Stok Sorumlusu</h3>
                <p>
                  Depodaki ürünlerin düzeni, gelen ve gidecek olan ürünlerin
                  sayımı, ürünlerin teslim alınması ve gönderilmesi,
                  irsaliyelerin düzenlenmesi, Stok bilgilerinin doğru olmasının
                  sağlanması.
                </p>
              </div>
              <div>
                <h2>
                  TOGO Ayakkabı <span>(2019-2020)</span>
                </h2>
                <h3>- Depo – Stok Sorumlusu</h3>
                <p>
                  Depodaki ürünlerin düzeni, gelen ve gidecek olan ürünlerin
                  sayımı, ürünlerin teslim alınması ve gönderilmesi,
                  irsaliyelerin düzenlenmesi, Stok bilgilerinin doğru olmasının
                  sağlanması.
                </p>
              </div>
              <div>
                <h2>
                  Emniyet Genel Müdürlüğü <span>(2012-2016)</span>
                </h2>
                <h3>- Komiser Yardımcısı</h3>
                <p>
                  Adli, İdari ve Önleyici Polislik, Büro Amirliği, Grup
                  Amirliği.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondColumn">
          <hr className="delete" />
          <br className="delete" />

          <div className="lisance">
            <div className="head">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
              <h2>Sertifikalar</h2>
            </div>
            <div>
              <h2 className="headerTwo">Sıfırdan HTML5 ve CSS3 Kursu </h2>
              <h3>Emre Altunbilek</h3>
            </div>
            <div>
              <h2 className="headerTwo">Modern Web Geliştirme Kursu </h2>
              <h3>Mustafa Murat Coşkun</h3>
            </div>
          </div>
          <br />
          <hr />
          <div className="comp">
            <div className="head headFirst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
              </svg>
              <h2>Bilgisayar </h2>
            </div>
            <div className="computer">
              <div>
                <label>Adobe Photoshop</label>{" "}
                <div>
                  <input type="range" value="60" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>Microsoft Office</label>{" "}
                <div>
                  <input type="range" value="70" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>HTML 5</label>{" "}
                <div>
                  <input type="range" value="100" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>CSS 3</label>{" "}
                <div>
                  <input type="range" value="90" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>BootStrap</label>{" "}
                <div>
                  <input type="range" value="80" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>JavaScript</label>{" "}
                <div>
                  <input type="range" value="80" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>React</label>{" "}
                <div>
                  <input type="range" value="90" disabled></input>
                </div>{" "}
              </div>
              <div>
                <label>Redux</label>{" "}
                <div>
                  <input type="range" value="100" disabled></input>
                </div>{" "}
              </div>
            </div>
          </div>
          <br />
          <hr />
          <div className="paragraph">
            <div className="head headFirst">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
              <h2>Ek Bilgi </h2>
            </div>
            <p>
              Web Tasarımı ile yaklaşık 1 yıldır ilgileniyorum. Udemy ve
              internetteki açık kaynaklar ile kendimi hızlı bir sekilde
              gelistirdim. Öğrenmeye ve yeniliklere acik olmam sayesinde kisa
              surede HTML5, CSS3, JavaScript, React ve Redux dillerini öğrendim.
              Bunlarla birlikte BootStrap da öğrendim.
            </p>
            <p>
              Yazılım dünyasında yeniliklere açık olmak ve çağa ayak uydurmak
              bir zorunluluktur. Bunun bilincinde ve sürekli öğrenmeye açık bir
              çalışma sürecine hazırım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hakkımda;
