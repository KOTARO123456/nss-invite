"use server"

import Form from 'next/form'
import Link from "next/link";
import createGroupJoinIdLogic from '@/lib/group/createGroupJoinIdLogic';

export default async function PriviligedCgjidForm({ groupId }: { groupId: number }) {
  return (
    <>
      <div className="overflow-x-auto">
        <div className="flex justify-start">
          <Link className="btn" href={`/dashboard/group/${groupId}`}>{`group ${groupId}`}</Link>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mx-auto max-w-xs">

        <div className="prose">
          <h1 className="mb-2 text-center">Create groupJoinId</h1>
        </div>

        <Form action={createGroupJoinIdLogic} className="w-full">
          <input type="hidden" name="groupId" placeholder="groupId" className="input input-bordered w-full max-w-xs" value={groupId} required readOnly />

          <div className="form-control">
            <label className="form-control mb-4 w-full">
              <span className="label label-text mb-2 w-full">joinName. Must be unique</span>
              <input type="text" name="joinName" placeholder="joinName" className="input input-bordered w-full" required />
            </label>
          </div>

          <div className="form-control">
            <label className="form-control mb-2 w-full">
              <span className="label label-text mb-2 w-full">maxUse</span>
              <input type="number" name="maxUse" placeholder="255" className="input input-bordered w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label label-text">isMaster</span>
              <input type="checkbox" name="isMaster" className="toggle" />
            </label>
          </div>
          <button className="btn btn-primary mb-2 w-full" type="submit">Submit</button>
          <Link className="btn btn-neutral mb-2 w-full" href="./">cancel</Link>
        </Form>
      </div>
    </>

  )
}