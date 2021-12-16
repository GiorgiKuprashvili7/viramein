import img1 from '../assets/images/image3.jpg'
import img2 from '../assets/images/image8.jpg'
import img3 from '../assets/images/image6.jpg'

export type blogType = {
  tag: string
  imgLink: string
  title: string
  date: string
  text: string
}[]

export const blogList: blogType = [
  {
    tag: 'nature',
    imgLink: img1,
    title: 'something i need to tell you',
    date: 'may 16, 2020',
    text: 'Eligendi quidem soluta possimus odio molestias obcaecati facilis, orem ipsum dolor sit amet consectetur, adipisicing elit',
  },
  {
    tag: 'branding',
    imgLink: img2,
    title: 'are you doing the right way?',
    date: 'apr 15, 2003',
    text: 'ipsum dolor sit orem  amet consectetur, adipisicing elit. Eligendi quidem soluta possimus odio molestias obcaecati facilis',
  },
  {
    tag: 'design',
    imgLink: img3,
    title: 'why you should allways first',
    date: 'june 01, 2021',
    text: 'orem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quidem soluta possimus odio molestias obcaecati facilis',
  },
]
