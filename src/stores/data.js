import { reactive } from 'vue'

// HOME ASSETS
import img2 from '../assets/images/img_2.jpeg'
import img3 from '../assets/images/img_3.jpeg'
import img4 from '../assets/images/img_4.jpeg'
import img7 from '../assets/images/img_7.jpeg'
import img8 from '../assets/images/img_8.jpeg'

// SHOPPING ASSETS
import img9 from '../assets/images/img_9.jpg'
import img10 from '../assets/images/img_10.jpg'
import img11 from '../assets/images/img_11.jpg'
import img12 from '../assets/images/img_12.png'
import img13 from '../assets/images/img_13.jpg'
import img14 from '../assets/images/img_14.jpg'
import img15 from '../assets/images/img_15.jpg'

export const useHome = {
  first: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.​​​​​​​',
  second: [img2, img3, img4],
  ninth: [img7, img8]
}

export const useShop = reactive({
  items: [
    {
      id: '1',
      img: img9,
      title: 'محصول اول',
      price: '۱۵٫۰۰۰ تومان'
    },
    {
      id: '2',
      img: img10,
      title: 'محصول دوم',
      price: '۳۵٫۰۰۰ تومان'
    },
    {
      id: '3',
      img: img11,
      title: 'محصول سوم',
      price: '۳۰٫۰۰۰ تومان'
    },
    {
      id: '4',
      img: img12,
      title: 'محصول چهارم',
      price: '۲۳٫۰۰۰ تومان'
    },
    {
      id: '5',
      img: img13,
      title: 'محصول پنجم',
      price: '۶۷٫۰۰۰ تومان'
    },
    {
      id: '6',
      img: img14,
      title: 'محصول شش',
      price: '۳۴٫۰۰۰ تومان'
    },
    {
      id: '7',
      img: img15,
      title: 'محصول هفت',
      price: '۱۳٫۰۰۰ تومان'
    },
  ]
})
