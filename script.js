document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     ① exp スライダー
  ========================== */
  const expSlider = document.querySelector('.exp_items');
  const expItems = document.querySelectorAll('.exp_item');

  if (expSlider && expItems.length) {
    let index = 0;
    const gap = 30;

    function moveExp() {
      const sliderWidth = expSlider.offsetWidth;
      const itemWidth = expItems[0].getBoundingClientRect().width;

      expItems.forEach(item => item.classList.remove('is-active'));
      expItems[index].classList.add('is-active');

      const x =
        index * (itemWidth + gap)
        - (sliderWidth / 2)
        + (itemWidth / 2);

      expSlider.scrollTo({ left: x, behavior: 'smooth' });

      index++;
      if (index >= expItems.length) index = 0;
    }

    moveExp();
    setInterval(moveExp, 5000);
  }


  /* =========================
     ② online スライダー
  ========================== */
  const onlineSlider = document.querySelector('.online');
  const onlineItems = document.querySelectorAll('.online_item');

  if (onlineSlider && onlineItems.length) {
    let index = 0;
    const gap = 20;

    function moveOnline() {
      const sliderWidth = onlineSlider.offsetWidth;
      const itemWidth = onlineItems[0].getBoundingClientRect().width;

      onlineItems.forEach(item => item.classList.remove('is-active'));
      onlineItems[index].classList.add('is-active');

      const x =
        index * (itemWidth + gap)
        - (sliderWidth / 2)
        + (itemWidth / 2);

      onlineSlider.scrollTo({ left: x, behavior: 'smooth' });

      index++;
      if (index >= onlineItems.length) index = 0;
    }

    moveOnline();
    setInterval(moveOnline, 3000);
  }


  /* =========================
     ③ Q&A アコーディオン
  ========================== */
  document.querySelectorAll('.qa_box dt').forEach(dt => {
    dt.addEventListener('click', () => {

      const box = dt.parentElement;
      const content = box.querySelector('dd');

      box.classList.toggle('active');

      if (content.style.height) {
        content.style.height = null;
      } else {
        content.style.height = content.scrollHeight + "px";
      }
    });
  });

});


$(function () {
  
  $(".inview").on("inview", function (event, isInView) {
    console.log('test');
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});

// スクロールバー　お客様の声
const voiceSlider = document.querySelector('.voice_slider');
const voiceFill = document.querySelector('.progress_fill');
const voiceBar = document.querySelector('.progress_bar');

if (voiceSlider && voiceFill && voiceBar) {

  voiceSlider.addEventListener('scroll', () => {

    const scrollLeft = voiceSlider.scrollLeft;
    const maxScroll = voiceSlider.scrollWidth - voiceSlider.clientWidth;

    const progress = scrollLeft / maxScroll;

    const maxMove = voiceBar.offsetWidth - voiceFill.offsetWidth;

    const moveX = progress * maxMove;

    voiceFill.style.transform = `translateX(${moveX}px)`;

  });

}
// ニュース
const newsBoxes = document.querySelectorAll('.news_box');

newsBoxes.forEach(box => {
    box.addEventListener('click', () => {

        // いったん全部外す
        newsBoxes.forEach(b => b.classList.remove('active'));

        // クリックしたものに付ける
        box.classList.add('active');
    });
});

box.classList.add('active');


// 線
const path = document.getElementById("stitchPath");
const pathLength = path.getTotalLength(); // パスの総長さを取得

const dashLength = 10; // 縫い目の長さ
const gapLength = 12;  // 縫い目の間隔

path.style.strokeDasharray = `${dashLength} ${gapLength}`;
path.style.strokeDashoffset = pathLength; // 初めは完全に隠す


let offset = pathLength;
const step = 2;        // 1pxずつ減らす
const speed = 5;       // msごとに描画更新


function animateStitch() {
  offset -= step;
  if (offset < 0) offset = 0;
  path.style.strokeDashoffset = offset;
  if (offset > 0) {
    requestAnimationFrame(animateStitch);
  }
}

// アニメーション開始
animateStitch();



// フォトギャラリー
const items = document.querySelectorAll('.inview');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // ランダムで遅延を追加
      const delay = Math.random() * 0.5; // 0〜0.5秒
      setTimeout(() => {
        entry.target.classList.add('is-show');
      }, delay * 1000);
    }
  });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));



// メニューボタン？
const menu = document.querySelector(".menu");
const menuPanel = document.querySelector(".menu_btn");

menu.addEventListener("click", () => {
    menuPanel.classList.toggle("active");
    menu.classList.toggle("active");
});

// クラフト
// const crftItems = document.querySelectorAll('.crft_box dl');
// const pagination = document.querySelector('.crft_box .pagination');
// const prevBtn = pagination.querySelector('.prev');
// const nextBtn = pagination.querySelector('.next');

// const itemsPerPage = 8;
// let currentPage = 0;
// const totalPages = Math.ceil(crftItems.length / itemsPerPage);

// // ページ番号ボタン生成
// for (let i = 0; i < totalPages; i++) {
//     const btn = document.createElement('button');
//     btn.classList.add('page');
//     btn.textContent = (i + 1).toString();
//     pagination.insertBefore(btn, nextBtn);
// }

// const pageButtons = pagination.querySelectorAll('.page');

// function showPage(page) {
//     crftItems.forEach((item, idx) => {
//         const start = page * itemsPerPage;
//         const end = start + itemsPerPage;
//         item.classList.toggle('active', idx >= start && idx < end);
//     });

//     pageButtons.forEach((btn, idx) => btn.classList.toggle('active', idx === page));
// }

// showPage(currentPage);

// pageButtons.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         currentPage = idx;
//         showPage(currentPage);
//     });
// });

// prevBtn.addEventListener('click', () => {
//     if (currentPage > 0) {
//         currentPage--;
//         showPage(currentPage);
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentPage < totalPages - 1) {
//         currentPage++;
//         showPage(currentPage);
//     }
// });

const pagination = document.querySelector('.pagination');
const prevBtn = pagination.querySelector('.prev');
const nextBtn = pagination.querySelector('.next');

const totalPages = 2; // 例えば総ページ数が5なら

// ページ番号ボタンを自動生成
for (let i = 0; i < totalPages; i++) {
    const btn = document.createElement('button');
    btn.classList.add('page');
    btn.textContent = (i + 2).toString(); // ここで数字を入れる
    pagination.insertBefore(btn, nextBtn); // nextボタンの前に追加
}

// ボタンをまとめて取得
const pageButtons = pagination.querySelectorAll('.page');

// クリック時の処理
pageButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        currentPage = idx;
        showPage(currentPage); // ページ切り替え関数を呼ぶ
    });
});



