import React from 'react'

const Projects = (props) => {
    return (
      <section className="project">
        <header>
          <h1> YAPTIĞIM İŞLER </h1>{" "}
        </header>
        <p>
          Merhaba. bu sayfada yapmış olduğum projelerimden birkaçını sizlere
          anlatacağım. Umarım beğenirsiniz.
        </p>

        <div>
          <div className="firstHead">
            <h2>İlk Web Sitem</h2>
            <div className="bar"></div>
          </div>
          <div>
            <p>
              Web Tasarımı öğrenmeye başlayalı henüz 20 gün olmuş iken bu
              projeyi geliştirdim. Geliştirdiğim bu siteyi ücretsiz domain ve
              hosting hizmeti veren <b>somee</b> sayesinde
              http://birol.somee.com/ domaini ile yayınlamıştım. Sadece HTML ve
              CSS kullanarak oluşturduğum bu siteyi yayınlayabilmek o zamanlar
              benim için tarifsiz bir mutluluktu. Özellikle <b> Hover Effect</b>
              ler ve <b> Animasyon</b>lar üzerinde çok özenle çalışmıştım. Tabi
              yaptığım site çok tıklanma almayınca beklediği reklam gelirini
              alamayan <b>somee</b> kısa zamanda sitemi yayndan kaldırdı.
              Videoda bu sitemi izleyebilirsiniz.
            </p>
            <div className="ifream">
              <iframe
                src="https://www.youtube.com/embed/fYdxx9rzKF4"
                title="YouTube video player 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <div className="firstHead">
            <h2>Döviz Hesaplama</h2>
            <div className="bar"></div>
          </div>
          <div>
            <p>
              JavaScript ile yaptığım ilk projem. Bu projede <b>fetch</b> ile
              güncel döviz kurlarını alıyordum. Alınan veriler ile{" "}
              <b>Güncel Kur</b> üzerinden döviz hesaplamaları yapılabiliyordu.
              Güzel bir çalışmaydı.
            </p>
            <div className="ifream">
              <iframe
                src="https://www.youtube.com/embed/bW9eQJyI_8s"
                title="YouTube video player2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <div className="firstHead">
            <h2>Yapılacaklar Listesi</h2>
            <div className="bar"></div>
          </div>
          <div>
            <p>
              JavaScript öğrenmeye başlayanların ilk yaptıkları projelerden
              birisi hiç şüphesiz <b>"to do list"</b> dir. Ama ben bir de geri
              sayım sayacı ekledim. Belirttiğiniz zaman içinde bu hedefe
              ulaşabilecek misiniz ?
            </p>
            <div className="ifream">
              <iframe
                src="https://www.youtube.com/embed/9bzpiLqYDaM"
                title="YouTube video player3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <div className="firstHead">
            <h2>Depo - Stok</h2>
            <div className="bar"></div>
          </div>
          <div>
            <p>
              En güzelini en sona sakladım. Bu güne kadar yaptığım en başarılı
              projem. Bu projeyi React ve Redux kullanarak geliştirdim. Projemin
              amacı Depolarda Stok kontrolünü sağlamaktır. Bu projede neler
              yapılabildiğini aşağıya yazıyorum.
            </p>
            <ul>
              <li>
                {" "}
                Depo menüsünde elinizdeki tüm envanterin listetsi ve deponuzda
                ne kadar olduğu yazıyor.
              </li>
              <li>
                Alış menüsüne gelip buradan Alış bilgilerini ekleyerek depoya
                ürün girişi yapılıyor. Alışı yapılan ürünün miktarı Depo
                menüsünde otomatik artıyor.
              </li>
              <li>
                Satış menüsüne gelip buradan Satış bilgilerini ekleyerek depodan
                ürün çıkışı yapılıyor. Çıkışı yapılan ürünün miktarı Depo
                menüsünde otomatik azalıyor.
              </li>
              <li>
                Yaptığınız Alış ve Satışların bilgilerini İşlemler menüsünde
                görebilir ve teker teker üzerlerinde inceleme yapabilirsiniz. bu
                belgeleri silme yetkisi ise sadece Admin'e aittir. Admin bu
                belgelerden birisini sildiği zaman yine depodaki ürünlerin
                miktarı otomatik olarak düzenlenecektir.
              </li>
              <li>
                Admin için özel bir Yetkilendirme menüsü vardır. Buradan bu
                projeyi kullanabilmesi için kullanıcı ekleyebilir ve kullanıcı
                çıkartabilir. ayrıca her kullanıcı için ayrı ayrı yetkilendirme
                de yapabilmektedir.
              </li>
            </ul>
            <p>
              <b>
                Ne anlatmak istediğimi videoda daha iyi anlayacağınızdan eminim.
              </b>
            </p>
            <div className="ifream">
              <iframe
                src="https://www.youtube.com/embed/NHQqDsnW-hg"
                title="YouTube video player4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Projects
