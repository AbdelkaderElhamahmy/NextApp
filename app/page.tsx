import Image from 'next/image'
import Navbar from './Components/Navbar/Navbar'
import style from './page.module.css'
import Link from 'next/link'
import Card from './Components/Card/Card'
export default function Home() {
  return (
    <main >
        <Navbar />
        <div className={style.HSContent}>
          <div> 
            <h1 className={style.HSContentFont}>Pompeo POttery</h1>
            <h1 className={style.HSContentFont3}>Unique Porcelain <span className={style.HSContentFont2}> & </span> </h1>  
            <h1 className={style.HSContentFont3}>Stone Collection</h1> 

            <p className={style.HSContentPara}>Unique & modern pottery made by our master in porcelain & stones </p>
            <button className={style.HSContentbtn}>Shop Collection</button>
          </div>
          <div>
            <Image fill src="/image01.png" alt="Picture of the author" />
          </div>
        </div>
        <div className={style.section02}>
          <div  className={style.SectionLeft}>
            <h1>Hand Craft Pottery</h1>
          </div>
          <div>
            <h1 className={style.HSContentFont}>Product Categories</h1>
            <h1 className={style.HSContentFont3}>Porcelain <span className={style.HSContentFont2}> & </span> Pottery</h1>  
          </div>
          <div className={style.sectionCenter}>
            <div className={style.SBLeft}> 
              <Link href="/category/vases">
                <Image width={60} height={60}  src="/vase.png" alt="vase" />
                Vases
              </Link>
            </div >
            <div className={style.SBCenter}>
              <Link href="/category/mugs">
                <Image width={60} height={60}  src="/mug.png" alt="mug" />
                Mugs
              </Link>
            </div>
            <div className={style.SBRight}>
              <Link href="/category/plates">
                <Image width={60} height={60} src="/plate.png" alt="plates" />
                Plates
              </Link>
            </div>

          </div>
          <div className={style.sectionBottom}>
              <div className={style.SBHeadr}>
                <h1>Hand Grafted <br/>Pottery since 1990</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                </p>
              </div>
              <div className={style.SBParagraph}>
                <h1>We Provide Premium <br/> Pottery Produts</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                </p>
              </div>
            </div>
        </div>
        <div className={style.section03}>
          <div className={style.S03Content}>
          <div className={style.Section03Right}>
              <h1>Featured Products</h1>
          </div>
            <div className={style.S03Top}>
              <div className={style.S03TopLeft}>
                <div className={style.S03ImageBG}>
                <Image src="/vase01.png" width={200} height={200} alt="Vase"/>
                </div>
              </div>
              <div className={style.S03TopRight}>
                <h1>Gold & Black Pottery</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                <Link href='/category/vase'>View Details</Link>
              </div>
            </div>
            <div className={style.S03Bottom}>
              <div className={style.S03BottomRight}>
                <h1>Orange Ceramic</h1>
                <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                <Link href='/category/vase'>View Details</Link>
              </div>
              <div className={style.S03BottomLeft}>
                <div className={style.S03ImageBG}>
                  <Image src="/vase02.png" width={280} height={280} alt="Vase"/>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={style.section04}>
        <div className={style.SectionLeft} style={{ left: 0, marginTop:9 }}>
            <h1>Product Collections</h1>
          </div>
          <div className={style.section04Top}>
              <h1 className={style.HSContentFont}>Our online store</h1>
              <h1 className={style.HSContentFont3}>Pottery Collection</h1>  
          </div>
          <div className={`${style.section04Cards} ${style.gridContainer}`}>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
            <div className={`${style.section04Cards} ${style.gridItem}`}> <Card/></div>
          </div>
        </div>
        <div className={style.section04}>
          <div className={style.section04Top}>
              <h1 className={style.HSContentFont}>Pompeo POttery</h1>
              <h1 className={style.HSContentFont3}>Ready to start shopping?</h1>  
              <button className={style.HSContentbtn}>NEW COLLECTION</button>
          </div>
        </div>
    </main>
  )
}
