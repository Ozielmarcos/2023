import { SpanProps } from "./props";
import { SpanBase } from "./styles";

export default function Span({ color, fontSize, lineHeight, textAlign, content }: SpanProps) {
  return <SpanBase
    $color={color}
    $fontSize={fontSize}
    $lineHeight={lineHeight}
    $textAlign={textAlign}
  >
    {content}
  </SpanBase>
}