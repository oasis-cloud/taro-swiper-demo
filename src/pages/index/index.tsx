import React, {
  Children,
  forwardRef, FunctionComponent,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  Swiper as TaroSwiper,
  SwiperItem as TaroSwiperItem,
  SwiperProps as TaroSwiperProps,
  View,
} from '@tarojs/components'
import classNames from 'classnames'
import {CommonEventFunction} from '@tarojs/components/types/common'

export interface SwiperProps extends Omit<TaroSwiperProps, 'ref'> {
  width: number
  height: number | string
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  autoPlay: boolean
  loop: boolean
  defaultValue: number
  onChange: (e: any) => void
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  autoPlay: false,
  loop: false,
  defaultValue: 0,
} as SwiperProps

const classPrefix = 'nut-swiper'
export const Swiper = forwardRef((props: Partial<SwiperProps>, ref) => {
  const {
    width,
    height,
    className,
    children,
    indicator,
    loop,
    autoPlay,
    duration,
    direction,
    defaultValue,
    onChange,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [current, ] = useState(defaultValue)


  return (
    <View
      className={classNames(classPrefix, className)}
      style={{
        width: '100%',
        height: '150px',
      }}
    >
      <View
        className="nut-swiper-inner"
        style={{
          width: '100%',
          height: '150px',
        }}
      >
        <TaroSwiper
          current={current}
          circular={loop}
          autoplay={autoPlay}
          vertical={direction === 'vertical'}
          indicatorDots
          style={{
            width: '100%',
            height: '150px',
          }}
          {...rest}
        >
          {Children.toArray(children).map((child, index) => {
            let className
            if (React.isValidElement(child)) {
              className = child.props.className
            }
            return (
              <TaroSwiperItem className={className} key={index}>
                {child}
              </TaroSwiperItem>
            )
          })}
        </TaroSwiper>
      </View>
    </View>
  )
})

Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'

export interface SwiperItemProps {
  itemId?: string
  skipHiddenItemLayout?: boolean
  children?: any
}

const defaultProps1 = {
  itemId: '',
  skipHiddenItemLayout: false,
} as SwiperItemProps

export const SwiperItem: FunctionComponent<Partial<SwiperItemProps>> = (
  props
) => {
  const { children, } = props
  return <>{children}</>
}
SwiperItem.defaultProps = defaultProps1
SwiperItem.displayName = 'NutSwiperItem'

const Index = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return <>
    <Swiper defaultValue={1} autoPlay indicator>
      {list.map((item, index) => (
        <SwiperItem key={item}>
          <img
            width="100%"
            height="100%"
            onClick={() => console.log(index)}
            src={item}
            alt=""
          />
        </SwiperItem>
      ))}
    </Swiper>
  </>
}

export default Index
