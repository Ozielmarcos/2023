import { BoxProps } from "./props";
import { BoxBase } from "./styles";

export default function Box({ borderRadius, boxSizing, height, margin, padding, width, display, align, direction, justify, bg, rowGap, columnGap, children }: BoxProps) {
  return <BoxBase
    $borderRadius={borderRadius}
    $boxSizing={boxSizing}
    $height={height}
    $margin={margin}
    $padding={padding}
    $width={width}
    $alignItems={align}
    $display={display}
    $flexDirection={direction}
    $justifyContent={justify}
    $backgroundColor={bg}
    $columnGap={columnGap}
    $rowGap={rowGap}
  >
    {children}
  </BoxBase>
}