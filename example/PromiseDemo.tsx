import KPromise from '$component/Promise';
import * as React from 'react';

export default function PromiseDemo() {
  function usePromise(bol: boolean) {
    return new Promise<{ result: string }>((resolve, reject) => {
      setTimeout(() => {
        if (bol) {
          resolve({
            result: 'resolve'
          });
        } else {
          reject({
            result: 'reject'
          });
        }
      }, 1000);
    });
  }
  return (
    <div>
      <KPromise await={usePromise(true)}
        then={(props) => <div>{props.result}</div>}
        catch={(props) => <div>{props.result}</div>} >
        <div>await</div>
      </KPromise>
      <KPromise await={usePromise(false)}
        then={(props) => <div>{props.result}</div>}
        catch={(props) => <div>{props.result}</div>}>
        <div>await</div>
      </KPromise>
    </div >
  );
}
