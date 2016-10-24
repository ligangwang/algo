class DynamicConnectivity{
  constructor(N){
    this.id = new Uint32Array(N);
    this.id.forEach((v,i)=>this.id[i] = i);
    //console.log(this.id);
  }
}

class QuickFind extends DynamicConnectivity{
  union(p, q){
    //slow union #N
    let pv = this.id[p];
    let qv = this.id[q];
    this.id.forEach((v,i)=>{
      if(v==pv){
        this.id[i] = qv;
      }
    });
  }

  connected(p,q){
    return this.id[p] == this.id[q]; //quick find
  }
}


class QuickUnion extends DynamicConnectivity{
  root(n){
    while(this.id[n]!=n) n = this.id[n];
    return n;
  }

  union(p, q){
    pv = this.root(p);
    qv = this.root(q);
    if(pv!=qv){
      this.id[pv] = qv;
    }
  }

  connected(p, q){
    return this.root(p) == this.root(q);
  }
}

class WeightedQuickUnion extends DynamicConnectivity{

}

exports.QuickFind = QuickFind;
exports.QuickUnion = QuickUnion;
exports.WeightedQuickUnion = WeightedQuickUnion;
