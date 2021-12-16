import { IoDiamondOutline, IoColorFillOutline } from 'react-icons/io5'
import { FiAnchor } from 'react-icons/fi'
import { MdOutlineHeadsetMic } from 'react-icons/md'

type postsType = {
  icon: React.ReactElement
  title: string
  body: string
}[]

export const posts: postsType = [
  {
    icon: <IoDiamondOutline />,
    title: 'architecture',
    body: 'Dicta laudantium cupiditate ducimus ipsa nulla sequidolor sit amet consectetur adipisicing elit. Nobis quasi assumenda',
  },
  {
    icon: <IoColorFillOutline />,
    title: 'interior design',
    body: 'ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium cupiditate ducimus ipsa nulla sequi',
  },
  {
    icon: <FiAnchor />,
    title: 'furniture design',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et non nisi modi at porro molestias, omnis voluptate cupiditate',
  },
  {
    icon: <MdOutlineHeadsetMic />,
    title: 'consulting',
    body: 'adipisicing elit, ipsum dolor sit amet consectetur Numquam quo quasi ad cupiditate ab repellat facere, corporis',
  },
]
