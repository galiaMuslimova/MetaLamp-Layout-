function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./theme', true, /\.js$/));
requireAll(require.context('./theme', true, /\.scss$/));

requireAll(require.context('@c', true, /\.js$/));
requireAll(require.context('@c', true, /\.scss$/));

requireAll(require.context('./pages', true, /\.js$/));
requireAll(require.context('./pages', true, /\.scss$/));