import img1 from '../assets/images/image9.jpg'
import img2 from '../assets/images/image12.jpg'
import img3 from '../assets/images/image13.jpg'

export type blogtype = {
  image: string
  tags: string[]
  title: string
  body: string
  author: string
  date: string
}[]

export const blogList: blogtype = [
  {
    image: img1,
    tags: ['marketing', 'technology', 'design', 'technology', 'design'],
    title: 'Advice for stirring you online community and fostering engagement',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, similique.',
    author: 'geroge kuprashvili',
    date: 'july. 26',
  },
  {
    image: img2,
    tags: [
      'interior',
      'furniture',
      'technology',
      'design',
      'bedroom',
      'furniture',
    ],
    title: 'Advice for stirring you online community and fostering engagement',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, similique.',
    author: 'geroge kuprashvili',
    date: 'july. 26',
  },
  {
    image: img3,
    tags: ['exterior', 'technology', 'design', 'technology', 'design'],
    title: 'Advice for stirring you online community and fostering engagement',
    body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, similique.',
    author: 'geroge kuprashvili',
    date: 'july. 26',
  },
]
