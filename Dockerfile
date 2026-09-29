#
# setup
#
ARG NODE_VERSION=26.10.0-slim
FROM ghcr.io/pnpm/pnpm:12 AS base
RUN pnpm runtime set node 24 -g
COPY . /app
WORKDIR /app

#
# dependencies
#
FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

#
# build
#
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next
EXPOSE 8080
CMD [ "pnpm", "start" ]
