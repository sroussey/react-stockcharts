import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartWithUpdatingData } from 'lib/charts/CandleStickChartWithUpdatingData';

class UpdatingDataPageForCandleStick extends React.Component {
  render() {
    return (
      <ContentSection title={UpdatingDataPageForCandleStick.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartWithUpdatingData
                  data={this.props.lotsOfData}
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
                __html: require('md/UPDATING-DATA'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

UpdatingDataPageForCandleStick.title = 'Updating Data';

export { UpdatingDataPageForCandleStick };
