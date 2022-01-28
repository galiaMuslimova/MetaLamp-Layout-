function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('@', true, /\.js$/));
requireAll(require.context('@', true, /\.scss$/));
requireAll(require.context('@', true, /\.css$/));