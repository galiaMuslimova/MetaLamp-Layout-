import './theme/global.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./theme', true, /\.js$/));

requireAll(require.context('@c', true, /\.js$/));
requireAll(require.context('@c', true, /\.scss$/));

requireAll(require.context('./pages', true, /\.js$/));
requireAll(require.context('./pages', true, /\.scss$/));

requireAll(require.context('./ui-kit', true, /\.js$/));
requireAll(require.context('./ui-kit', true, /\.scss$/));