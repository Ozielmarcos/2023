import { TitleBase } from "./styles"

interface TitleProps {
  content: string
}

export default function Title({ content }: TitleProps) {
  return <TitleBase>
    {content}
  </TitleBase>
}