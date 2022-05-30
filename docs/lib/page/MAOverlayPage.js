import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithMA } from 'lib/charts/CandleStickChartWithMA';

class MAOverlayPage extends React.Component {
  render() {
    return (
      <ContentSection title={MAOverlayPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithMA
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/MOVING-AVERAGE-OVERLAY'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

MAOverlayPage.title = 'Moving Average';

export { MAOverlayPage };
