import React from 'react';

/**
 * Ultra-safe image error handler that prevents any recursive error loops.
 * Tries fallback once; if fallback also fails, halts gracefully without loop.
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string = '/images/hero_charcuterie_1793428038233.jpg'
) {
  const img = event.currentTarget;
  if (!img) return;

  // Unbind native onerror to prevent browser-level recursion
  img.onerror = null;

  // Check if we already attempted recovery
  if (img.dataset.retryAttempted === 'true') {
    // If even fallback failed, render a clean neutral placeholder background instead of crashing
    img.style.opacity = '0.9';
    return;
  }
  img.dataset.retryAttempted = 'true';

  const currentSrc = img.src || '';
  if (!currentSrc.includes(fallbackSrc)) {
    img.src = fallbackSrc;
  }
}
