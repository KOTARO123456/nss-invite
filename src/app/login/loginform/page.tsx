import Link from 'next/link';
import Form from 'next/form'
import QrCodeIdLoginLogic from '@/lib/login/qrCodeIdLoginLogic';
import ToastBox from '@/components/ToastBox';
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const continueUrl = (await searchParams).continue
  const loginStatus = (await searchParams).status
  const isFailure = loginStatus == "loginerror"

  return (
    <>
      <div className="mx-auto max-w-xs">
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
          <div className="prose">
            <h1 className="mb-2 text-center">Log in</h1>
          </div>
          <Form action={QrCodeIdLoginLogic} className="w-full">
            <input type="hidden" name="continueUrl" value={continueUrl} />
            <div className="form-control mb-4 w-full">
              <label className="form-control w-full mb-4">
                <span className="label label-text w-full mb-4">please input your QR Code Id.</span>
                <input type="text" name="qrCodeId" placeholder="qrCodeId" className="input input-bordered w-full" required />
              </label>
            </div>
            <button className="btn btn-primary mb-2 w-full" type="submit">Submit</button>
            <Link className="btn btn-neutral mb-2 w-full" href="/login">other login options</Link>
          </Form>
        </div>
      </div>
      <div className="toast toast-end">
        {isFailure ? <ToastBox message="Login Failed" color='info' /> : <></>}
      </div>
    </>
  )
}