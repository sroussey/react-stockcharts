import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { PointAndFigureWithUpdatingData } from 'lib/charts/PointAndFigureWithUpdatingData';

class UpdatingDataPage extends React.Component {
  render() {
    return (
      <ContentSection title={UpdatingDataPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <PointAndFigureWithUpdatingData
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

UpdatingDataPage.title = 'Updating Data';

export { UpdatingDataPage };
