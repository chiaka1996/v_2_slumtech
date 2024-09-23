import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../context/context';
import style from './nav.module.css';
import { Dropdown } from "flowbite-react";
import { useRouter } from "next/router";

const Navigation = () => {
  const { bar, openBar, closeBar} = BarState();
  const router = useRouter();

  // const selectLanguage = (e) => {
  //   let value = e.target.value;
  //   const googleOptions = document.getElementById("lang_select").options;
   
  //  for (var i = 0; i < googleOptions.length; i++) {
  //   console.log(googleOptions[i].value)
  //   console.log(value)
  //   if (googleOptions[i].value == value) {
  //    googleOptions[i].setAttribute("selected",true);
  //     break;
  //   }
  // }
  // }

  function googleTranslateElementInit() {
     window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

  useEffect(() => {
    googleTranslateElementInit()
    // let selectLang =  document.getElementsByTagName('select');
    //   let language = selectLang[1]
    //   language.setAttribute('id', 'lang_select');
    // console.log(language)
  },[])

    return(
      <nav className="font-primary bg-[#fff] z-[500] py-2 2xl:py-6 px-normal xlarge:px-xnormal max-large:px-[5%] flex flex-row justify-between items-center fixed top-0 left-0 w-full">
         <Image 
            src="/logo/slumtechLogo.png"
            width="120"
            height="60"
            alt="logo"
        />
           <div className="w-[85%] flex flex-row justify-between items-center font-nav max-lg:hidden">
           <div className={router.asPath == "/" ? style.activeLink : style.navLink}> 
           <Link href="/" className='no-underline text-primary text-normal'>
            HOME
            </Link>
            </div>

            <div className={/^\/about\/*\w*/.test(router.asPath) || router.asPath == '/ourteam' ? style.activeLink : style.navLink}> 
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>ABOUT</span>} size="3xl" className='text-left'>
            <Link href="/about" className='no-underline'>
              <Dropdown.Item className='text-left w-full text-nowrap'>
                <div className="font-normal text-[14px] w-full">ABOUT SLUMTECH</div>
              </Dropdown.Item>
              </Link>
              <Link href="/about/mission" className='no-underline'>
              <Dropdown.Item>
                <div className="pl-[1rem] font-normal text-[14px]">Our Mission</div>
              </Dropdown.Item>
              </Link>
              <Link href="/about/vision" className='no-underline'>
              <Dropdown.Item>
                 <div className="pl-[1rem] font-normal text-[14px]">Our Vision</div>
              </Dropdown.Item>
              </Link>
              <Link href="/ourteam" className='no-underline'>
              <Dropdown.Item>
              <div className="font-normal text-[14px]">OUR TEAM</div>
              </Dropdown.Item>
              </Link>
            </Dropdown>
            </div>

            <div className={router.asPath == "/programs" ? style.activeLink : style.navLink}> 
           <Link href="/programs" className='no-underline text-primary text-normal'>
            PROGRAMS
            </Link>
            </div>

            <div className={/^\/media\/*\w*/.test(router.asPath) || router.asPath == '/blog' ? style.activeLink : style.navLink}> 
            <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span>MEDIA</span>} size="3xl" className='text-left'>
            <Link href="/media/post1" className='no-underline'>
              <Dropdown.Item className='text-left w-full text-nowrap'>
                <div className="font-normal text-[14px] w-full">EVENTS</div>
              </Dropdown.Item>
              </Link>
              <Link href="/media" className='no-underline'>
              <Dropdown.Item>
                <div className="font-normal text-[14px]">NEWS</div>
              </Dropdown.Item>
              </Link>
              <Link href="/blog" className='no-underline'>
              <Dropdown.Item>
                 <div className="font-normal text-[14px]">BLOGS</div>
              </Dropdown.Item>
              </Link>
            </Dropdown>
            </div>

            <div className={router.asPath == "/contact" ? style.activeLink : style.navLink}> 
           <Link href="/contact" className='no-underline text-primary text-normal'>
            CONTACT US
            </Link>
            </div>

            <div className={/^\/career\/*\w*/.test(router.asPath) || router.asPath == '/career' ? style.activeLink : style.navLink}> 
           <Link href="/career" className='no-underline text-primary text-normal'>
            CAREER
            </Link>
            </div>

            <div id="google_translate_element" className=''>
              {/* <select onChange={selectLanguage} className=''  aria-label="Language Translate Widget"><option value="">Select Language</option><option value="ab">Abkhaz</option><option value="ace">Acehnese</option><option value="ach">Acholi</option><option value="aa">Afar</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="alz">Alur</option><option value="am">Amharic</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="as">Assamese</option><option value="av">Avar</option><option value="awa">Awadhi</option><option value="ay">Aymara</option><option value="az">Azerbaijani</option><option value="ban">Balinese</option><option value="bal">Baluchi</option><option value="bm">Bambara</option><option value="bci">Baoulé</option><option value="ba">Bashkir</option><option value="eu">Basque</option><option value="btx">Batak Karo</option><option value="bts">Batak Simalungun</option><option value="bbc">Batak Toba</option><option value="be">Belarusian</option><option value="bem">Bemba</option><option value="bn">Bengali</option><option value="bew">Betawi</option><option value="bho">Bhojpuri</option><option value="bik">Bikol</option><option value="bs">Bosnian</option><option value="br">Breton</option><option value="bg">Bulgarian</option><option value="bua">Buryat</option><option value="yue">Cantonese</option><option value="ca">Catalan</option><option value="ceb">Cebuano</option><option value="ch">Chamorro</option><option value="ce">Chechen</option><option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="chk">Chuukese</option><option value="cv">Chuvash</option><option value="co">Corsican</option><option value="crh">Crimean Tatar</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="fa-AF">Dari</option><option value="dv">Dhivehi</option><option value="din">Dinka</option><option value="doi">Dogri</option><option value="dov">Dombe</option><option value="nl">Dutch</option><option value="dyu">Dyula</option><option value="dz">Dzongkha</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="ee">Ewe</option><option value="fo">Faroese</option><option value="fj">Fijian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fon">Fon</option><option value="fr">French</option><option value="fy">Frisian</option><option value="fur">Friulian</option><option value="ff">Fulani</option><option value="gaa">Ga</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gn">Guarani</option><option value="gu">Gujarati</option><option value="ht">Haitian Creole</option><option value="cnh">Hakha Chin</option><option value="ha">Hausa</option><option value="haw">Hawaiian</option><option value="iw">Hebrew</option><option value="hil">Hiligaynon</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hu">Hungarian</option><option value="hrx">Hunsrik</option><option value="iba">Iban</option><option value="is">Icelandic</option><option value="ig">Igbo</option><option value="ilo">Ilocano</option><option value="id">Indonesian</option><option value="ga">Irish Gaelic</option><option value="it">Italian</option><option value="jam">Jamaican Patois</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="kac">Jingpo</option><option value="kl">Kalaallisut</option><option value="kn">Kannada</option><option value="kr">Kanuri</option><option value="pam">Kapampangan</option><option value="kk">Kazakh</option><option value="kha">Khasi</option><option value="km">Khmer</option><option value="cgg">Kiga</option><option value="kg">Kikongo</option><option value="rw">Kinyarwanda</option><option value="ktu">Kituba</option><option value="trp">Kokborok</option><option value="kv">Komi</option><option value="gom">Konkani</option><option value="ko">Korean</option><option value="kri">Krio</option><option value="ku">Kurdish (Kurmanji)</option><option value="ckb">Kurdish (Sorani)</option><option value="ky">Kyrgyz</option><option value="lo">Lao</option><option value="ltg">Latgalian</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lij">Ligurian</option><option value="li">Limburgish</option><option value="ln">Lingala</option><option value="lt">Lithuanian</option><option value="lmo">Lombard</option><option value="lg">Luganda</option><option value="luo">Luo</option><option value="lb">Luxembourgish</option><option value="mk">Macedonian</option><option value="mad">Madurese</option><option value="mai">Maithili</option><option value="mak">Makassar</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ms-Arab">Malay (Jawi)</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mam">Mam</option><option value="gv">Manx</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mh">Marshallese</option><option value="mwr">Marwadi</option><option value="mfe">Mauritian Creole</option><option value="chm">Meadow Mari</option><option value="mni-Mtei">Meiteilon (Manipuri)</option><option value="min">Minang</option><option value="lus">Mizo</option><option value="mn">Mongolian</option><option value="my">Myanmar (Burmese)</option><option value="bm-Nkoo">N'Ko</option><option value="nhe">Nahuatl (Eastern Huasteca)</option><option value="ndc-ZW">Ndau</option><option value="nr">Ndebele (South)</option><option value="new">Nepal Bhasa (Newari)</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="nus">Nuer</option><option value="oc">Occitan</option><option value="or">Odia (Oriya)</option><option value="om">Oromo</option><option value="os">Ossetian</option><option value="pag">Pangasinan</option><option value="pap">Papiamento</option><option value="ps">Pashto</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese (Brazil)</option><option value="pt-PT">Portuguese (Portugal)</option><option value="pa">Punjabi (Gurmukhi)</option><option value="pa-Arab">Punjabi (Shahmukhi)</option><option value="qu">Quechua</option><option value="kek">Qʼeqchiʼ</option><option value="rom">Romani</option><option value="ro">Romanian</option><option value="rn">Rundi</option><option value="ru">Russian</option><option value="se">Sami (North)</option><option value="sm">Samoan</option><option value="sg">Sango</option><option value="sa">Sanskrit</option><option value="sat-Latn">Santali</option><option value="gd">Scots Gaelic</option><option value="nso">Sepedi</option><option value="sr">Serbian</option><option value="st">Sesotho</option><option value="crs">Seychellois Creole</option><option value="shn">Shan</option><option value="sn">Shona</option><option value="scn">Sicilian</option><option value="szl">Silesian</option><option value="sd">Sindhi</option><option value="si">Sinhala</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="es">Spanish</option><option value="su">Sundanese</option><option value="sus">Susu</option><option value="sw">Swahili</option><option value="ss">Swati</option><option value="sv">Swedish</option><option value="ty">Tahitian</option><option value="tg">Tajik</option><option value="ber-Latn">Tamazight</option><option value="ber">Tamazight (Tifinagh)</option><option value="ta">Tamil</option><option value="tt">Tatar</option><option value="te">Telugu</option><option value="tet">Tetum</option><option value="th">Thai</option><option value="bo">Tibetan</option><option value="ti">Tigrinya</option><option value="tiv">Tiv</option><option value="tpi">Tok Pisin</option><option value="to">Tongan</option><option value="ts">Tsonga</option><option value="tn">Tswana</option><option value="tcy">Tulu</option><option value="tum">Tumbuka</option><option value="tr">Turkish</option><option value="tk">Turkmen</option><option value="tyv">Tuvan</option><option value="ak">Twi</option><option value="udm">Udmurt</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="ug">Uyghur</option><option value="uz">Uzbek</option><option value="ve">Venda</option><option value="vec">Venetian</option><option value="vi">Vietnamese</option><option value="war">Waray</option><option value="cy">Welsh</option><option value="wo">Wolof</option><option value="xh">Xhosa</option><option value="sah">Yakut</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="yua">Yucatec Maya</option><option value="zap">Zapotec</option><option value="zu">Zulu</option></select> */}
            </div>

              <button onClick={() => router.push('/ourteam')} className='bg-btn_bg text-normal px-[1rem] py-2 2xl:py-3 text-btn_color rounded-[12px] font-header'>GET INVOLVED</button>
          
           </div>

           {
                    !bar ? <div className={style.hamburger}>
                  <Image 
                  width={24} 
                  height={24}
                  src="https://img.icons8.com/ios/24/menu--v1.png" 
                  alt="menu--v1"
                  onClick={openBar}
                  />
                    </div> : 
                    <div className={style.hamburger}>
                    <Image 
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios/24/delete-sign.png" 
                    alt="delete-sign"
                    onClick={closeBar}
                    />   
                </div>
                }
                <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </nav>
    )
}

export default Navigation;