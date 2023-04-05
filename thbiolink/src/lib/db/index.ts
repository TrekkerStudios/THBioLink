import Pool from 'pg-pool'
import Cursor from 'pg-cursor'

import {
  Kysely,
  PostgresDialect,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
  type RawBuilder,
  sql
} from 'kysely'

import type { DB } from './schema';
import {
	DATABASE_HOST,
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_URL
} from '$env/static/private';

export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: DATABASE_URL,
      }),
      cursor: Cursor
    }),
  });

export function json<T>(obj: T): RawBuilder<T> {
	return sql`${JSON.stringify(obj)}`;
}
