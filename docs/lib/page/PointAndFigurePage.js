import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { PointAndFigure } from 'lib/charts/PointAndFigure';

class PointAndFigurePage extends React.Component {
  render() {
    return (
      <ContentSection title={PointAndFigurePage.title}>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/POINT-AND-FIGURE'),
              }}></aside>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <PointAndFigure data={this.props.someData} type={type} />
              )}
            </TypeChooser>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

PointAndFigurePage.title = 'Point & Figure';

export { PointAndFigurePage };
