
type SpinnerProps = {
  size?: number; // px
};

export default function Spinner({ size = 24 }: SpinnerProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"
    />
  );
}