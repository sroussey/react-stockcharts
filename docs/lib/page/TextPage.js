import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChart } from 'lib/charts/CandleStickChartWithText';

class TextPage extends React.Component {
  render() {
    return (
      <ContentSection title={TextPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChart data={this.props.someData} type={type} />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/INTERACTIVE-TEXT'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

TextPage.title = 'Interactive text';

export { TextPage };
