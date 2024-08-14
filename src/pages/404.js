import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    return <PageLayout page={page} site={site} />;
}

export async function getStaticProps({ params }) {
    // console.info('404 sluffffff', params.slug)
    const data = allContent();
    const urlPath = '/404';
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;
