import React from "react";
import Title from "../../components/Title";
import Title2 from "../../components/Title2";

const InnerPages = () => {
  return (
    <div className="inner-pages" id="inner-pages">
      <div className="block">
        <Title text="恆春感性：生活的語言" />
        {/* <Title2 text="台灣感性，從恆春開始" /> */}
        <div>
          <p className="inner_p">
            「感性」是能感受情緒與氛圍的能力。在恆春，這不是一種口號，而是一種生活的實感。風比人先開口，海色能預報天氣。我們談論的恆春感性，是在市場裡聽見攤販的笑聲、在海邊聞到帶鹹味的風，是長年累積的真實，讓人找回與土地對話的能力。
          </p>
          <p className="inner_p">
            「台灣感性」是一種超越理性的直覺感受，它不追逐宏偉藍圖或冰冷數據，只捕捉生活中細微、卻真實的脈動，如清晨市場的叫賣、巷尾的徐徐暖風，以及鄰里間自然照應的默契，這是深深扎根於台灣土地的珍貴文化底蘊。而「恆春感性」正是這國境之南的熱情展現。恆春半島在蔚藍海洋與蒼鬱山林中，以其慵懶緩慢的節奏，天然承載著「慢生活」與「多樣性」。然而，面對地方發展只關注數據指標的常態，「恆春感性」毅然誕生，選擇「真實感受」作為核心語言，將人的情感與生活的細微肌理置於冰冷數字之上。這份感性，體現在潛水教練憑海潮的直覺、青年創業者選擇留下的心境、孩子專注淨灘的神情等充滿人間煙火的溫度集合，構成恆春最堅實的文化層面。
          </p>
        </div>
        <div className="img_group">
          <img src="./img/homepage/IMG_5001.JPG" alt="" />
          <img src="./img/homepage/IMG_4474.JPG" alt="" />
        </div>
      </div>
      <div className="block">
        <Title text="日常直覺與生活方式" />
        <p className="inner_p">
          恆春半島是台灣最南端、具備「慢生活」與「多樣性」的獨特場域。在這裡，海洋、山林、移居者與在地居民和諧共存，使恆春人練就了一套與自然同步的日常直覺。他們的生活極度貼近土地，懂得看天吃飯，順應海流。這種直覺表現為：看風向決定活動、看海色預知天氣，並且透過鄰里交流獲得比網路更即時的資訊。這種「靠感覺」生活的智慧，賦予恆春人柔軟應對變化的能力，形成一種獨特的恆春節奏。
        </p>
        <div className="img_group">
          <img src="./img/homepage/IMG_4995.JPG" alt="" />
          <img src="./img/homepage/IMG_4857.JPG" alt="" />
        </div>
      </div>
      <div className="block">
        <Title text="感性與永續：活得久的生活哲學" />
        <p className="inner_p">
          當地方創生目光慣於鎖定冰冷的產業數據與政策指標時，我們忽略了核心命題：「人如何真實有情感地生活？」
        </p>
        <p className="inner_p">
          在全球效率洪流中，「恆春感性」提醒我們，地方價值在於喚醒人與土地間的情感連結。唯有當人願意真實感受、參與並長久生活，這種「生活的永續」才會自然發生。
        </p>
        <div className="img_group">
          <img src="./img/homepage/IMG_4278.JPG" alt="" />
          <img src="./img/homepage/IMG_4855.JPG" alt="" />
        </div>
      </div>
      <div className="block">
        <Title text="永續半島五大面向" />
        <p className="inner_p">
          恆春半島的永續，並非一句空泛的口號，而是由五個堅實的面向共同編織、持續支撐而成的穩定基石。對於每一個選擇與恆春共生的人無論是老居民還是新移居者這五大面向都是理解在地資源、構築安心生活的起點。它們不僅僅是五個名詞，更是生活在這裡的五種核心方式、五種與土地共舞的智慧。
        </p>

        <p className="inner_p">
          在恆春，永續不是遙遠的理想，而是一種會呼吸的生活方式。風、山、海與人彼此環扣，從潮間帶的浪聲到老城的歌聲，每一個行動都在延續地方的生命節奏。有人潛進海裡撿回敬意，有人種菜、煮飯、唱歌，用日常實踐出「能長久存在」的溫柔力量。
          讓我們從自然、生態、文化、食物、運動與生活出發，看見恆春如何在感性與永續之間，找到屬於自己的呼吸節奏。
        </p>
        <div className="grid-container">
          <a href="/your-link" className="card">
            <img src="./img/homepage/000_5470.jpg" alt="" />
            <div className="overlay"></div>
            <div className="text">
              <h3>生態半島</h3>
              <p className="inner_p">自然共生的法則</p>
            </div>
          </a>
          <a href="/your-link" className="card">
            <img src="./img/homepage/IMG_4278.JPG" alt="" />
            <div className="overlay"></div>
            <div className="text">
              <h3>文化半島</h3>
              <p className="inner_p">生活累積的厚度</p>
            </div>
          </a>
          <a href="/your-link" className="card">
            <img src="./img/homepage/IMG_4554.JPG" alt="" />
            <div className="overlay"></div>
            <div className="text">
              <h3>風味半島</h3>
              <p className="inner_p">風土產生的滋味</p>
            </div>
          </a>
          <a href="/your-link" className="card">
            <img src="./img/homepage/IMG_4599.JPG" alt="" />
            <div className="overlay"></div>
            <div className="text">
              <h3>運動半島</h3>
              <p className="inner_p">與自然共振的自由</p>
            </div>
          </a>
          <a href="/your-link" className="card">
            <img src="./img/homepage/IMG_4922.JPG" alt="" />
            <div className="overlay"></div>
            <div className="text">
              <h3>宜居半島</h3>
              <p className="inner_p">安心生活的支持體系</p>
            </div>
          </a>
        </div>
      </div>
      <div className="block">
        <Title text="慢下來後才聽得見的聲音" />
        <div className="content">
          {/* <img src="./img/homepage/IMG_4483.JPG" alt="" /> */}
          <div>
            <p className="inner_p">
              恆春沒有要成為誰的理想目的地。它有強風、有淡季、有步調慢到讓剛從城市來的人不太習慣。但也因為如此，這裡保留了最真實的生活表情，沒有過度包裝，也不急著證明什麼。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p">
              「恆春感性」不是浪漫的句子，而是一種生活後自然長出來的感覺。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p">
              是早上吹乾的空氣、午後落在山邊的光、老街店主的招呼聲、移居者在這裡重新調整人生方向的勇氣。這些日常的小事，慢慢疊起來，就成了屬於恆春的溫度。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p">在地人用熟悉的方式生活；</p>
            <p className="inner_p"></p>
            <p className="inner_p">移居者帶來新的可能；</p>
            <p className="inner_p"></p>
            <p className="inner_p">旅人短暫停留，也能感受到這座小鎮的真實。</p>
            <p className="inner_p"></p>
            <p className="inner_p">
              恆春不是完美的，但它願意用本來的樣子迎接每一個來到這裡的人。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p">這本移居手冊想留下的，就是這種感性。</p>
            <p className="inner_p"></p>
            <p className="inner_p">不誇大、不粉飾，而是誠實地告訴你：</p>
            <p className="inner_p"></p>
            <p className="inner_p">
              如果你願意放慢一點、聽一下風的聲音、跟著土地的節奏走，
            </p>
            <p className="inner_p"></p>
            <p className="inner_p">恆春會讓你看到另一種生活的可能。</p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p">也許你不會在這裡找到所有答案，</p>
            <p className="inner_p"></p>
            <p className="inner_p">
              但你會在這裡找到一個可以思考、可以安穩、可以重新整理自己的地方。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p"></p>
            <p className="inner_p">
              恆春感性，不是吸引人留下，而是讓人想留下。
            </p>
            <p className="inner_p"></p>
            <p className="inner_p">
              如果你準備好與這座半島一起慢下來，恆春會用它的方式接住你。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPages;
