<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/favicon.ico" type="image/x-icon">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, interactive-widget=overlays-content" />
  <title>The DVIHZ</title>
  <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/styles/main.min.css" />


  <?php wp_head(); ?>
</head>

<body>
  <div class="wrapper">
    <section class="thanks">
    <div class="thanks__header">
        <div class="container">
            <a href="/" class="header__logo">
                <svg width="106" height="21" viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.247559 4.20015H6.42848V20.1712H10.241V4.20015H16.4219V0.829102H0.247559V4.20015Z"
                        fill="black" />
                    <path
                        d="M18.9868 20.1712H22.7994V11.9923H31.6376V20.1712H35.4501V0.829102H31.6376V8.62121H22.7994V0.829102H18.9868V20.1712Z"
                        fill="black" />
                    <path
                        d="M39.3799 20.1712H53.4169V16.9107H43.1924V11.7988H52.5216V8.53831H43.1924V4.08963H53.3303V0.829102H39.3799V20.1712Z"
                        fill="black" />
                    <path d="M63.1675 21H66.8645L78.4176 0H74.7206L63.1675 21Z" fill="black" />
                    <path
                        d="M88.6558 20.1712H94.75C101.104 20.1712 105.754 17.0212 105.754 10.5002C105.754 3.9791 101.104 0.829102 94.75 0.829102H88.6558V20.1712ZM92.4683 16.8002V4.20015H95.01C99.1113 4.20015 101.884 6.32779 101.884 10.5002C101.884 14.7278 99.1113 16.8002 95.01 16.8002H92.4683Z"
                        fill="black" />
                </svg>
            </a>
        </div>
    </div>
    <div class="thanks__body">
        <div class="container">
            <h1 class="thanks__title">
                <span class="thanks__title-row">Дякуємо, ми вже</span>
                <div class="thanks__title-row">перевіряємо зарахування</div>
                <div class="thanks__title-row">платежу!</div>
            </h1>

            <div class="thanks__row">
                <p class="thanks__subtitle">
                    <b>Перед тим, як залетиш у чат двіжу, заповни анкету-знайомство</b>, щоб майбутній контент в THE / D
                    був максимально корисним саме для тебе
                </p>
                <a href="/#form" class="thanks__link">Заповнити <br> анкету</a>
            </div>
            <p class="thanks__text">

                Посилання на закритий чат ти отримаєш після заповнення анкети
            </p>
            <svg class="thanks__icon" width="27" height="28" viewBox="0 0 27 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.99995 27.3345C0.895379 27.3345 -5.12452e-05 26.4391 -5.17509e-05 25.3345L-5.01493e-05 7.33452C-5.08237e-05 6.22995 0.89538 5.33452 1.99995 5.33452C3.10452 5.33452 3.99995 6.22995 3.99995 7.33452L3.99995 23.3345L19.9999 23.3345C21.1045 23.3345 21.9999 24.23 21.9999 25.3345C21.9999 26.4391 21.1045 27.3345 19.9999 27.3345L1.99995 27.3345ZM26.7487 3.41421L3.41416 26.7487L0.585736 23.9203L23.9203 0.585786L26.7487 3.41421Z"
                    fill="black" />
            </svg>
        </div>
    </div>
    <img class="thanks__line" src="<?php bloginfo('template_directory'); ?>/img/line.svg" alt="">
</section>
  </div>

  <script src="<?php bloginfo('template_directory'); ?>/js/main.min.js"></script>
  <?php wp_footer(); ?>
</body>

</html>