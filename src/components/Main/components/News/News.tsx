import React from "react";
import { useEffect } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { INews } from "../../../../types/NewsTypes";
import classes from "./News.module.scss";

const News: React.FC = () => {
    const { formattedNews, receivedNews } = useTypedSelector(
        (state) => state.news
    );
    const { FormatNews } = useActions();
    useEffect(() => {
        FormatNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [receivedNews]);
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Новости</h1>
            </div>
            <div className={classes.news}>
                {!formattedNews.length
                    ? null
                    : formattedNews.map((news: INews) => {
                          return (
                              <div className={classes.item} key={news.id}>
                                  <div className={classes.title}>
                                      <h2>{news.title}</h2>
                                  </div>
                                  <div className={classes.content}>
                                      <p
                                          dangerouslySetInnerHTML={{
                                              __html: news.content,
                                          }}
                                      ></p>
                                  </div>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default News;
