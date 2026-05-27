'use client';

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Frontend Kursi</h1>  <p> Bu kursda <strong>HTML</strong> va <strong>CSS</strong> o‘rganiladi. </p>  <p> HTML saytning <em>asosiy qismi</em> uchun ishlatiladi. </p>  <p> CSS saytga <i>rang va dizayn</i> beradi. </p>  <p> <mark>Chegirma bor</mark> </p>  <a href=\"https://youtube.com\"> YouTube </a>  <br><br>  <img src=\"../img.jpg\" alt=\"Rasm\">  <h1>Mavzular</h1>  <ul> <li>HTML</li> <li>CSS</li> </ul>  <ol> <li>Dars</li> <li>Practice</li> </ol>  <br><br>  <div>  <p>Bu div</p>  <p>Aylana shakl</p>  </div>  <br><br>  <iframe width=\"400\" height=\"200\" src=\"https://www.youtube.com/embed/UB1O30fR-EE\"> </iframe>    <iframe         src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23974.741643566405!2d69.2446325413812!3d41.31228535188762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1770999368746!5m2!1sru!2s\"         width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"         referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`}} />
  );
}
