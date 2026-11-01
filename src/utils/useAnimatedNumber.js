import { useState, useEffect } from 'react';

/**
 * Hook tạo hiệu ứng số nhảy mượt mà (Animated Counter)
 * khi người dùng kéo thanh trượt hoặc chuyển đổi dữ liệu
 */
export function useAnimatedNumber(targetValue, duration = 350) {
  const [displayValue, setDisplayValue] = useState(targetValue);

  useEffect(() => {
    let startTime = null;
    const startValue = displayValue;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(startValue + (targetValue - startValue) * ease);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [targetValue, duration]);

  return displayValue;
}
