import React, { useLayoutEffect } from 'react';

import { type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type AnimationConfig = {
  minOpacity: number;
  maxOpacity: number;
  stepDuration: number;
  easing: (value: number) => number;
};

const DEFAULTS = {
  ANIMATION_CONFIG: {
    minOpacity: 0.6,
    maxOpacity: 0.8,
    stepDuration: 400,
    easing: Easing.linear,
  } as AnimationConfig,
  STYLE: {
    backgroundColor: '#8F8F8F',
    width: '100%',
    borderRadius: 4,
    height: 24,
  } as ViewStyle,
};

type SkeletonProps = ViewStyle & {
  animationConfig?: Partial<AnimationConfig>;
};

/**
 * @param props {SkeletonProps}
 * @example
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  animationConfig,
  ...style
}) => {
  const animatedValue = useSharedValue(
    animationConfig?.minOpacity ?? DEFAULTS.ANIMATION_CONFIG.minOpacity
  );

  useLayoutEffect(() => {
    const easing = animationConfig?.easing ?? DEFAULTS.ANIMATION_CONFIG.easing;
    const fromValue =
      animationConfig?.minOpacity ?? DEFAULTS.ANIMATION_CONFIG.minOpacity;
    const toValue =
      animationConfig?.maxOpacity ?? DEFAULTS.ANIMATION_CONFIG.maxOpacity;
    const duration =
      animationConfig?.stepDuration ?? DEFAULTS.ANIMATION_CONFIG.stepDuration;

    animatedValue.value = fromValue;

    animatedValue.value = withRepeat(
      withTiming(toValue, {
        duration,
        easing,
      }),
      Infinity,
      true
    );
  }, [animatedValue, animationConfig]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animatedValue.value,
  }));

  return <Animated.View style={[DEFAULTS.STYLE, style, animatedStyle]} />;
};
