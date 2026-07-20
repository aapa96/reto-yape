import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import {ComingSoonTemplate} from '../src/capabilities/coming-soon/presentation/components/templates/ComingSoonTemplate/ComingSoonTemplate';
import {AppText} from '../src/shared/design-system/components/atoms/AppText/AppText';

const safeAreaInsets = {bottom: 34, left: 0, right: 0, top: 59};

test('renders reusable content for an unfinished feature', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(
      <ComingSoonTemplate
        description="Estamos preparando nuevos beneficios."
        eyebrow="BENEFICIOS"
        safeAreaInsets={safeAreaInsets}
      />,
    );
  });

  const textNodes = renderer!.root.findAllByType(AppText);

  expect(
    textNodes.filter(node => node.props.children === 'Próximamente'),
  ).toHaveLength(1);
  expect(
    textNodes.filter(node => node.props.children === 'BENEFICIOS'),
  ).toHaveLength(1);
});
