import React, {FunctionComponent} from "react";

import Layout from "@theme/Layout";

import clsx from "clsx";
import styles from "./styles.module.css";
import {GoMarkGithub} from "react-icons/all";
import groupBy from "lodash/groupBy";

type Item = {
    title: string;
    description: string;
    siteRelUrl?: string;
    repoUrl?: string;
    apiUrl?: string;
    type: string;
};

type Props = {
    title: string;
    description: string;
    items: Item[];
};

const Ui: FunctionComponent<Props> = ({title, description, items}) => {
    const groupedByType = groupBy(items, (i) => i.type);

    return (
        <Layout title={title} description={description}>
            <main className="container margin-vert--lg">
                {Object.entries(groupedByType).map(
                    ([type, items]: [string, Item[]]) => {
                        return (
                            <>
                                <div className="text--center margin-bottom--md margin-top--md">
                                    <h1>{type}</h1>
                                </div>
                                <div className="row">
                                    {items.map((t) => (
                                        <div key={t.title} className="col col--4 margin-bottom--lg">
                                            <div className={clsx("card", styles.showcaseItem)}>
                                                <div className="card__body">
                                                    <div className="avatar">
                                                        <div className="avatar__intro margin-left--none">
                                                            <h4 className="avatar__name">{t.title}</h4>
                                                            <small className="avatar__subtitle">
                                                                {t.description}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    <div className="card__footer">
                                                        <div className="button-group button-group--block">
                                                            {t.siteRelUrl && (
                                                                <a
                                                                    className="button button--small button--secondary button--block"
                                                                    href={t.siteRelUrl}
                                                                    target="_blank"
                                                                    rel="noreferrer noopener"
                                                                >
                                                                    Documentation
                                                                </a>)}
                                                            {t.apiUrl && (
                                                                <a
                                                                    className="button button--small button--secondary button--block"
                                                                    href={t.apiUrl}
                                                                    target="_blank"
                                                                    rel="noreferrer noopener"
                                                                >
                                                                    API
                                                                </a>
                                                            )}
                                                            {t.repoUrl && (
                                                                <a
                                                                    className="button button--small button--secondary button--block"
                                                                    href={t.repoUrl}
                                                                    target="_blank"
                                                                    rel="noreferrer noopener"
                                                                >
                                                                    <GoMarkGithub/>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        );
                    }
                )}
            </main>
        </Layout>
    );
};

export default Ui;
