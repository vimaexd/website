import PageContainer from '@mae/components/layout/PageContainer'
import React from 'react'
import Image from 'next/image';
import dayjs from 'dayjs';

export default function BlogPost({content, meta}: {content: any; meta: any;}) {
  return (
    <PageContainer>
      <div className="flex gap-8 flex-col lg:flex-row items-center lg:items-start">
        <h1>{meta.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.toString() + "<hr/>" }}
          className="prose prose-invert w-full flex-shrink-0"
        ></div>
        <div className="w-full gap-4 flex flex-col">
          <div className="w-full bg-ctp-surface0 rounded-lg px-4 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg">Author</h3>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/pfp.png"
                width={32}
                height={32}
                alt="Profile picture"
                className="rounded-full"
              />
              <p>mae</p>
            </div>
          </div>
          <div className="w-full bg-ctp-surface0 rounded-lg px-4 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-lg">Published on</h3>
            <div className="flex items-center gap-2">
              {dayjs(meta.date).format("DD/MM/YYYY")}
            </div>
          </div>

          {meta.original_src && (
            <div className="w-full bg-ctp-surface0 rounded-lg px-4 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">Original source</h3>
              <div className="flex items-center gap-2">{meta.original_src}</div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
