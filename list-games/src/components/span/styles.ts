import styled from "styled-components";
import { SpanBaseProps } from "./props";

export const SpanBase = styled.span<SpanBaseProps>`
color: ${(props) => props.$color};
text-align: ${(props) => props.$textAlign};
font-size: ${(props) => props.$fontSize};
line-height: ${(props) => props.$lineHeight};
`