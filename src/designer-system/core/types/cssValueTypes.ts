import { CSSProperties } from "react";

type GlobalColors =
  | `var(--hoverBlue)`
  | `var(--clearOrange)`
  | `var(--additionalBlack)`
  | `var(--writer)`
  | `var(--overtone)`
  | `var(--tagGrey)`
  | `var(--symbol)`
  | `var(--frameGrey)`
  | `var(--lightGrey)`
  | `var(--white)`
  | `var(--headline)`
  | `var(--placeGrey)`
  | `var(--decorGrey)`
  | `var(--inactive)`
  | `var(--watermark)`
  | `var(--detached)`
  | `var(--hoverOptionTagFilter)`
  | `var(--backgroundTagFilter)`
  | `var(--borderTagFilter)`
  | `var(--borderHoverTagFilter)`
  | `var(--ocean)`
  | `var(--irisBlue)`
  | `var(--caribeanSea)`
  | `var(--blueLagoon)`
  | `var(--aquaBlue)`
  | `var(--tagPurple)`
  | `var(--lightPurple)`
  | `var(--pinkLiqi)`
  | `var(--hoverRuby)`
  | `var(--ruby)`
  | `var(--lightRuby)`
  | `var(--babyPink)`
  | `var(--cottonCandy)`
  | `var(--martianDirt)`
  | `var(--selectiveYellow)`
  | `var(--sunny)`
  | `var(--butterYellow)`
  | `var(--tropicalForest)`
  | `var(--pigmentGreen)`
  | `var(--seaweed)`
  | `var(--dragonFly)`
  | `var(--secretLake)`
  | `var(--oneMintDrop)`
  | `var(--lightMint)`
  | `var(--blueGradient2)`
  | `var(--blueGradient)`
  | `var(--intenseGradient)`
  | `var(--darkGradient)`
  | `var(--warmGrey)`
  | `var(--lightGradient)`
  | `var(--dodgerBlue)`
  | `var(--lavander)`
  | `var(--platinum)`
  | `var(--grayscale)`
  | `var(--purplishGrey)`
  | `var(--softPeach)`
  | `var(--lightOrchid)`
  | `var(--error)`

  //news colors Clear
  | `var(--base-white)`
  | `var(--brand-primary-base)`
  | `var(--brand-primary-lighten1)`
  | `var(--brand-secondary-base)`
  | `var(--brand-tertiary-base)`
  | `var(--grayscale-base)`
  | `var(--button-disabled-bg)`
  | `var(--button-active-bg)`
  | `var(--button-disabled-color)`
  | `var(--light-outline)`
  | `var(--light-on-surface)`
  | `var(--light-on-surface-variant)`
  | `var(--light-on-secondary-container)`
  | `var(--light-secondary-container)`
  ;


export type GlobalValues = 'inherit' | 'initial' | 'revert' | 'unset' | 'auto'
export type GlobalPositions = 'top' | 'bottom' | 'left' | 'right';

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none'
  | 'table'
  | GlobalValues

export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | GlobalValues

export type ListStyle =
  | 'none'
  | 'disc'
  | 'circle'
  | 'square'
  | 'decimal'
  | 'decimal-leading-zero'
  | 'lower-roman'
  | 'upper-roman'
  | 'lower-greek'
  | 'lower-latin'
  | 'upper-latin'
  | 'armenian'
  | 'georgian'
  | 'lower-alpha'
  | 'upper-alpha'
  | 'none'
  | GlobalValues

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | GlobalValues

export type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | GlobalValues

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | GlobalValues

export type JustifySelf =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | GlobalValues

export type AlignSelf =
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch'
  | GlobalValues

export type Overflow = 'visible' | 'hidden' | 'scroll' | 'clip' | 'overlay' | GlobalValues

export type Position =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'
  | GlobalValues

export type PointerEvents =
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | GlobalValues

export type UserSelect = "auto" | "none" | "text" | "all" | "contain" | GlobalValues

export type Cursor =
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'col-resize'
  | 'row-resize'
  | 'zoom-in'
  | 'zoom-out'
  | GlobalValues

export type LetterSpacing = 'normal' | string | GlobalValues

export type TextDecoration =
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink'
  | GlobalValues

export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | GlobalValues

export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end'
  | 'justify-all'
  | 'match-parent'
  | '-webkit-center'
  | GlobalValues

export type LineHeight = 'normal' | string | GlobalValues

export type FontFamily =
  | 'var(--primaryFont)'
  | 'var(--secondaryFont)'
  | GlobalValues

export type FontWeight =
  | 'normal'
  | 'semi-bold'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | GlobalValues

export type Size = 'max-content' | 'min-content' | string | GlobalValues

export type Transform =
  | `matrix(${string})`
  | `matrix3d(${string})`
  | `translate(${string})`
  | `translate3d(${string})`
  | `translateX(${string})`
  | `translateY(${string})`
  | `translateZ(${string})`
  | `scale(${string})`
  | `scale3d(${string})`
  | `scaleX(${string})`
  | `scaleY(${string})`
  | `scaleZ(${string})`
  | `rotate(${string})`
  | `rotate3d(${string})`
  | `rotateX(${string})`
  | `rotateY(${string})`
  | `rotateZ(${string})`
  | `skew(${string})`
  | `skewX(${string})`
  | `skewY(${string})`
  | `perspective(${string})`
  | string
  | GlobalValues

export type PlaceContent = 'center' | 'start' | 'end' | GlobalValues

export type Color = GlobalColors | GlobalValues

export type BackgroundColor = GlobalColors | GlobalValues

export type BackgroundAttachment = 'scroll' | 'fixed' | 'local' | GlobalValues

export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | GlobalValues

export type BackgroundSize = 'cover' | 'contain' | GlobalValues

export type ObjectFit =
  CSSProperties['objectFit']
  | GlobalValues

export type ObjectPosition =
  GlobalPositions
  | GlobalValues

export type Visibility = 'visible' | 'hidden' | GlobalValues

export type Global = string | GlobalValues
