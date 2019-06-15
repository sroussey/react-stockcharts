import React from 'react';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithCHMousePointer } from 'lib/charts/CandleStickChartWithCHMousePointer';

class MousePointerPage extends React.Component {
  render() {
    return (
      <ContentSection title={MousePointerPage.title}>
        <Row>
          <Section colSpan={2}>
            <CandleStickChartWithCHMousePointer
              data={this.props.someData}
              type='svg'
            />
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/MOUSEPOINTER'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

MousePointerPage.title = 'Mouse pointer';

export { MousePointerPage };
