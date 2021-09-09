import React from 'react';
import * as SvgIcon from '../../libs/svg-icons';

const termsAssayType = [
    {
        field: 'dna-binding',
        title: 'DNA Binding',
        count: 7746,
    },
    {
        field: 'transcription',
        title: 'Transcription',
        count: 2592,
    },
    {
        field: 'dna-accessibility',
        title: 'DNA Accessibility',
        count: 1561,
    },
];

const termsAssayTitle = [
    {
        field: 'tf-chip-seq',
        title: 'TF ChIP-seq',
        count: 3316,
    },
    {
        field: 'histone-chip-seq',
        title: 'Histone ChIP-seq',
        count: 3316,
    },
    {
        field: 'dnase-seq',
        title: 'DNase-seq',
        count: 1201,
    },
];

const demoFacets = [
    {
        field: 'assay-type',
        title: 'Assay Type',
        terms: termsAssayType,
    },
    {
        field: 'assay-title',
        title: 'Assay Title',
        terms: termsAssayTitle,
    }
];

const Term = ({ term }) => {
    return (
        <div className="term">
            <div className="term__title">{term.title}</div>
            <div className="term__count">{term.count}</div>
        </div>
    );
};

const TermList = ({ terms, isExpanded }) => {
    return (
        <>
            {isExpanded && (
                <div
                    className="term-list term-list--expanded"
                >
                    {terms.map(term => {
                        return <Term key={term.field} term={term} />;
                    })}
                </div>
            )}
        </>
    );
};

const FacetTrigger = ({ facet, isExpanded, onClick }) => (
    <button type="button" className="facet-trigger" onClick={() => onClick(facet.field)}>
        <div className="facet-trigger__title">{facet.title}</div>
        <div className="facet-trigger__indicator">
            {isExpanded
                ? <SvgIcon.Minus css="facet-trigger__indicator-icon" />
                : <SvgIcon.Plus css="facet-trigger__indicator-icon" />
            }
        </div>
    </button>
);

const Facet = ({ facet, isExpanded, onClick }) => {
    return (
        <div className="facet" key={facet.field}>
            <FacetTrigger facet={facet} isExpanded={isExpanded} onClick={onClick} />
            <TermList terms={facet.terms} isExpanded={isExpanded} />
        </div>
    );
};

const initExpandedFacets = (facets) => {
    return facets.reduce((accExpandedFacets, facet) => {
        accExpandedFacets[facet.field] = false;
        return accExpandedFacets;
    }, {});
};

const FacetList = () => {
    const facetsToRender = demoFacets;
    const [expandedFacets, setExpandedFacets] = React.useState(() => initExpandedFacets(facetsToRender));

    const facetTriggerHandler = (facetField) => {
        setExpandedFacets({
            ...expandedFacets,
            [facetField]: !expandedFacets[facetField],
        });
    };

    return (
        <div className="facet-list">
            {facetsToRender.map(facet => {
                return <Facet key={facet.field} facet={facet} isExpanded={expandedFacets[facet.field]} onClick={facetTriggerHandler} />
            })}
        </div>
    )
};

export default FacetList;
