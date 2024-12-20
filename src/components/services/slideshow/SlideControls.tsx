import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Button from '../../common/Button';

interface SlideControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

export default function SlideControls({
  onPrev,
  onNext,
  isPaused,
  setIsPaused
}: SlideControlsProps) {
  return (
    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsPaused(!isPaused)}
        className="!p-2"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
          <Play className="w-4 h-4" />
        ) : (
          <Pause className="w-4 h-4" />
        )}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        className="!p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        className="!p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}