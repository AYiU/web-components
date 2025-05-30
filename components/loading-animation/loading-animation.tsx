export function LoadingAnimation() {
  return (
    <div className="flex justify-center items-center h-8">
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
