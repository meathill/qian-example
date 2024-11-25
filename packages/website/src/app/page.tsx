import {fetchStrapi} from "../services";
import {Fragment} from "react";
import {Qian, StrapiResponse} from "@/types";
import {Article} from "@/components/mdx";

export default async function PageIndex() {
  const response = await fetchStrapi('qians', {
    'pagination[pageSize]': '15',
    sort: 'date:desc',
    populate: 'thumbnail',
  });
  const qians = (await response.json()) as StrapiResponse<Qian[]>;

  return (qians.data || []).map((qian) => (
    <Fragment key={qian.id}>
      <Article
        id={qian.id.toString()}
        date={qian.date}
      >
        <div
          className="flex flex-col items-center"
        >
          <img
            src={qian.thumbnail.formats.medium.url}
            alt={qian.title.toString()}
            loading="lazy"
            width={500}
            height={750}
          />
        </div>
      </Article>
    </Fragment>
  ))
}
