import { useState, useEffect } from "react"
/**
 * useState -> digunakan untuk mendefinisikan state
 * useEffect -> adalah sebuah fungsi yang dijalankan/dieksekusi ketika komponennya telah ditampilkan
 */
import { Modal } from "bootstrap"

export default function Buku(props) {
    let [buku, setBuku] = useState([])
    let [modalBuku, setModalBuku] = useState(null)
    let [id, setId] = useState(0)
    let [judul, setJudul] = useState("")
    let [penulis, setPenulis] = useState("")
    let [penerbit, setPenerbit] = useState("")
    let [tahun_rilis, setTahunRilis] = useState("")
    let [link_gambar, setLinkGambar] = useState("")
    let [action, setAction] = useState("")
    let [readId, setReadId] = useState(true)

    useEffect(() => {
        let arrayBuku = [
            {
                id: 1, judul: `Kehidupan setelah Lahiran`, penulis: `Amir`,
                penerbit: `Bang Bambang`, tahun_rilis: 2805,
                link_gambar: `data:image/jpeg;base64,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
                YE/Ygti/cuieIgoQUZmLaFRA8YuRO2pykExEj4Q8PcxeIsqyLaa24KnNHiLFUKlpnM0CdZ5nUrMaxgLCkm5jDqAB9YQwJAhyJ+zrIMjxb9e4R7D2QTiWtXMzArnHugEiA0DVgsHN68qA/gNhL+LsWx3YtC3athp1aZu3RJYgA+O42gmAV31NWGDw+Is3NCiMTbDMFkSdVIDe8SVJIGxzDSCBFOFw7gIMUBoJltJ8bQRm8XiA03lid6enDF7vN9IIVnAljC+7MsM2pDE6CNjGooFycWzjwoEWAQoyDuwfGLr21AIOhm65LwPe86Bl4jlDuLRGRwNAWCvmzRG2aGE+XKaB3FpWIGIZvqWuOROndZiFIBjYEgn7TjrRGw1tyLYxxZlJCKGGinKzDPIJ8TMZblbPKKRomZ/tOl1Lp75bau2ZmNvZmzurknbNmVhHl86S5ajWamcWtHvriSxyu6jMZaFcjXU6z57k71Cu2CBSLQMmlTVpUiiYgoqmh89PlRLTiIkfOqOeSJXDLwtXUuMquEMlGEq3RSD9knQ1btxHBQAuHbwqFBbLLBe8ILZXALmVkwZgjQAVQ5wIOYR60rj+Y+Yj4UxJs0lu5w5lnIFJFwhTnJBNyUWQY0TSeR6ihti8HB+oYaPEAa5guQk94TII5T9rkYGfwzzMQTudeVSLZ8Ob7JPvcp9dvhQkEpP2LvE4/CuIOHcEW7iLGUjxNcNozmBGXPqdSYoYxeES69w2ctsqqrbGrEi+GzAkkLFpQpOYSZ0gmqq22m8/Gh3WhfFAHLXbp8aKEpOy2t43B5B9QwORgxzT4tCCJaQgYsBzhLfMtT8BjsOtvu3tB1V3cvAzxkUWoggjxAyuYb6GqKw8x4hE7yNI9alm+CRLqNNddPMan9TRQ22XX0rBBPFY93LoG1aTJYDNqCCeY1VRpqaeOJ4O2bdzuMzLE5dftA5TmY7ICskNq25yzVZhMNeee7R7nmiNc8jGUHUUG/wAPxA0Ni8oBiDbcHmZIy6+tFBb9iw4VdsFbi/R8wLvkYgAqrWXRQJJkhmVtyBE71NvXcOysluy6Er72VSQSbR1hzuUfw8s46aUyqQACsLvBME6+ZkHTlFHdgY8UHTYgTG346U6IcmWtq7hntW1fDs2VTPugFmFvMQ2fN7yTygNFVSY6wly6PowhxbXKQPDGl0qZJUtJKkHQweVPcFyqouYz4QPFy101kwfhvUDiRK3AGHd3NzMg+pnY0mkCkzQWsZgTcVGsqignxmcpy59MocwDK8+TRrAPFxOCzKxssT4XjQq3dsMzAZuahgBABG8cqjCMykliF5GSAIA3jQzPOdSfKnZdCcwEToSNBPiBnblP406DUyTheI4dEyvZFy59Yc8qAQ0BJAYTBUGDpvFAxeMwQLquHeTmAIPuyHyFYfUgsup3C0LEMxGkEiIHOdQQ09Nonn5VCsYd3c+BrhGnhBYA9CV2iaVFxbBHCRy56bTHKROnz0qNdQ6ab1YXpViX0POSBofx8zUMlZMMD0Ej4c+lIuLID2T0pUZ0YeKCAdj1+P4UqRpZuOHe0fCYdVNrhlsXBEtmUctSGFvNM+dO4v7V1vZZ4bhWjX60d6Z5RAWKwWEwT3DCrP4Va4bgI3d9Jg5eXxqlBsUpxjyXlj2q4hGzphMCrfvCwQd53zzUs+2bGEQ+Hwr+qPEdIzxVXhuBWI93MehYyflRLnZ+zE5NJjRiCPvNPR2sxfU47omL7YscJyWcKgPJbRH/AL5NV9z2ocVMxfAUnRRZtQJ5D6um3OxocA22YTsCMw+7WqLH8Ju2dWGkwGXVfny+NJwaNIZYT4Zc2u3d7+1w2CvHrcwyAzv/AGeWr7h/tSurGTAYNSNCVQr/AEMjpXnObnz61M4ficrSRoQQdSNI+POD8KUavc0o3+M9o+McE/R8MhkyRYLkgTvnJ6VCwXbHGkMVvi3c1BUYewmhbSItydOW9RMLxhFtCUHimIBmR4TGafER4Z5Cdpqo4o2e4XtliI3BIbRQus7yfPmfKttMUtiTQYj2ncWDR36jKZjuUAI85XbrFRcT7UeLGP8AvOUdFtWwPnlJ/CszDMSJn4zEHnTbsqxJObWJHXfb8PWs2kUX932j8UME4omNPct/0yanzp+D9o2JUsbtnCX8+/e4e2D87YQ/OazzoIAkR+Y+6h3MLHp/0E1Mo0Co9E4D7ULqe5gsHbn+7Rre/o2tW2J9pV26BOGwx/8AyBrn9SIrzHANlqxTFfr0rknOSex0xxx7o2h7QrdPiwWBmd+4/wD6++pli7h39/A4Y/wh7ZA8iGNYzC4n/rr5/r51d4DHARO3PlWUsuRdy1hxvlGowN7DWSWtYCwrHmSXO3+IHp5UW92rxSjwd0o2gWzH/NVA2Pjc7fr5VGucS0InzqPWyMv0sa7F1ie2+L08GH05m2TPzfSq7EducdqBctpr9m0k/eDVHf4kPI+v6/U1R43iETy1O+laRnORDjBdjYH2hY4ad8retq3+C0q87v8AETOn9a5WunJ7mdwL1IWFUQImiuwAAnz5EH7qgLdo1pdAwOn62863c22eLJXyT8GJIAOu/TSpd2w4ObdedQeF3Bnk+g8p8/z86trl8AjaOnT06+vnU62pUc2S1INhSx0DHTVQOXUa/rU1Y2cIX0ZQZjOhGhGxMHccz0qDw3GIj5mGZTuIgAnQ1fWrasAV91WMHfKDynpGoNXLI4vgyqSd2YHth2MNoG9ZHg3ZP3fMdVrII0HWvdEtd+ty2Bt7rbzGsz0kkfE15R2w4L3Dh1EI/Lkrcx+IqovWm+6PXwZtSSZU27hjKMsEzHMQN+v/AMU4Yk6JAGokzE+Z6HnNc4Sqm4M20H9RVn2pTDlwcPIBAEE5jIGuvTmKdujqK63dzTJ2+PyFIWwxUEkHr0HIeWn9aGt3rv5jfT7oFSbNrMNDJPQ6nTQT5nrzAppWhF5xLgdu1hkurcTM06D3hESSOU8qoMM5Mgjc6jn89wNfup+IxukFp5QNvl8fupndMDClWnmuv2QTv0kg+hpNDQZEXUBtd9RpGk/Ea6/nQ8RjNSP1Px1iORondqE3k/Mg/vfefSKh39zzk78tIn19edQ8dcl+oSsNj6t8NjulZUnWrDBXq58mL2NseSzSnFZyioGZmMZR4izEmAqjU6Vt+z/s0YjPjbpWYPdWjqP4rnXyUadaXsy4EtiwuMuCb14fVCPct8iP8T7k9Mo61b47jskqCc3LbWBPOuaWSON13N4Yp5N1wSrvYzhtsR9GRvN2Zj8y1Z/i/YHht4EWw9puRtOSB/I8j5RUt+0JdFzTJ57cv61CPEtBr89Ky+4lex0x6JV+o877SdhMThiIBvWyfC9tSdejJup+Y86VegHjhU+8QfI0q7F1Da4OaXRpPk8xN0Ry086Dh8TqAOZ3/rUE3NN6Lg268q7IwVHj+kkmW1i/D6nn86tlxg5E7frWsyjZWA++pFvGnY86r07OfJhvdGs4VdE+JdP6zsD9/wAav+EYvuyCsDUAg6aHQHT0InlNYjB40xof/ir/AAV/3WkEajXkT+eh+FRkjfJx5IuDs3K3yuV1UyATcCidJ6GNSCflVJ264Kl6wzWxoVzLpsQJHp0qXwfHLmDXCZIywDIEREjmN96DiMcMtxNdGZhJ5HcDn7wP+1XLhbjk2OnFO1Z4kRGnOaRn4VN45YyXrijbOY/XxqAa65KnR6Sdqx7OeZPx/XlRrGIIOk/Aka8jp0qOTNORJ2BmkmxhroEDYmPTSDRO8CmVJI03EEHc66x0nnrQlXeTz9R6/rrVhYCuYhAxA6Kmug5HXQAjzPnVpNiJFvKbevvH5yeR2mZER5/Grx65WII11nSNfTlG1W/E+Hi2Mya6ZYKyw2BjoQRoRy1BqBdtOyqzrOeQrSPFG+/rpMb1cuKYkVlT8BYLslsH32VB/MQJ++g4nBtbMMCDEjzkx+Bo2BxPdXLbtPgdWIiD4WBrnmnwbQaR9BcUbIBbXQL4FA5KugEc9P61m3gX1Z9Q2h5j3GGvl8Kv+IksgYDMCPe6gbH8aznEW2bYqR6EE6g/rSvBk25M97porQRb9pc9xVICiCJ+ySDoPIeVZzG8TKllbkTr/QzzFWPGeIW2BBGo35fHzEcqxfEcQJKqZG/x8unpXVgxauRdRl0LZh8VxksZJM7UqoXelXesSPKfUNsHT1eK3OA7BYFwM3FrAJEkAJp87oq1X2SWHUtZ4nafTw+FYnlJW4YE84NdClRxHmb3STJpF/Ot1iPZFiU97F4Ff4rzrHzt9aPb9lVsGLnFMKu0ZSGknrmdYqtbCkYjCYsjc1e8N40FUg6mR8orUJ7HLVwDueI23POEVvlluHlST2a4LClTjeJKsz4ECqTHQksxH8tKUtXJjkwxmReD8fhpaI0kdQABHrpU7iHFkMxBO0ncg/iP/aKhNb4Cphb+OOvvBQQvnBUEj4TQreD4Ux8PE7qCdO9wxmOclSAefLpWKxpT1GMcFKkzHdp7k4m4RzP4CquvR7fY3hF5yRxgST9q0Lf3uwFaGz7GcA6ymKvNpqym2y/IDT51rJ27OyOyo8XroNek432f8Jt3GttxYKwGxRTlPRmDZZ8tKqv+zdmJ7jH4C6JgRfytHUqRp6SfjUjsxec9aNbxJDTP47bb9K2uH9kWOcArcwxnkL0/8qkHTXQ1MHsQx2WTew+bkJuQf5u70p20Bi8Pi80BtTECRrPUGRsNNetGt4E3CMm0nmRy0EcvKtXjvY9i7SgticKNftO1sajeWTWhcP7GOmZLnE8Am21/OwOvKABp5/jWkZ+5LKvhnaBsJeFxlS4+oDsAxQH3io2z+cdY3rQcc4/h+IYK93pzXrS95bcqFKkEAoDuVIOxnkeVWCezzh1wEXOKo76ElTaUA9R4iYioHEOwvCrQgcWCzuMq3dv4Dp6GlJ2xbc2TOwna9bmGWxcP1loZf4l+zvvpp8POo3GuLqJ1gfjVXhvZ2xYPheJYK4s6MbrW2+K5THmJq/tezDEXPDiMXh00nwFrpOmhhgkDzk1wz6WLlqR6GLrXCOk874jxIsTBMcuWh5Gqt3r1EeyXCLpd4pbB8hbUf8V2adivZJg0GduJqluN3VOXn3gBreMFFbHPkzuZ5QaVeif6i8JBObjKfy2wfvz0qsysw4rjgdBQy1OFMyodlHQfKiLEcqtuyfAxi7ro13ukt2jcZ8ufQPbX3QRoM4YmdFVjVxhOwSutt/pE27gbK1u3nDG0mIa4FGbxR3Kgde8FAaWzIG0OgFPt6aCPhWsHYYGwcQLzG2EZyTbgqi/SgsidCzWUWORuHpqPiPYo2sTh7HeknEXrlrMUjKLdxVzxOoIJPwp2JxZmi/SmwTua2w9m+rp9IOZcQbYPdHKUVsOC+YNAYi8CF5wdeg8V2DVRmXEZ1OYqe7ymFsX7uozGDmslfRgfKixaGZJYoOSSdBW6Ps1VnZVxemY20JtETcW7etMrDPoua0fEOR2qPhuwRZMO4v638Mb2UJOWGsDJvr4boadNtqLDRJGPtaERR2VSIMGtnc9mzFSUv5iL9u2RkjS7iHs5/e5Zc0VAs9itcYovmcNee0v1ZIcpbu3JYhvqwRaInXUjrTslwk9zM27WUysA+kRyqXhMdcScruuv2WK69dD51oe0nYk4bD3MR3udEYqPBlki+1ogmdNAG+J6Ua77P2U2V70k3LVm4YSSpu37VplgN9gXM0+XLei0JxmzJXbjsSWMtO51J85Otct2gPP4RWwxvYBrdu5d76UTB/SPdiTmI7v3tNic2vpRsR7O8t65ZOJEqloo3dyGe934ymG8IU2WE677U7QtEjFX9jt50IIY8q0nZnsecThlxBuBM2JSyFyz4XKA3NxszxHlVfw7hN27eWyqtDXRbFwqSglwskjT4TRYtDjsVtrUGdhXLthOij4TWqxHYcd3ibqX8yWcPbv25TK1xbgunKQW8JAtsTvU7/s4+sKLiSyhwk90QQe9a28jMdAVkHnPKlaK0S5RhQSu0abaUm02AkbwKl8bwXcXRbzZvq7TzEftbKXIjyzx8Kru819aA0jnk86VDFyBXaRVMhg08NQzTs1SatF92M45bwmJ7+7bdwF8OR8jqwZWkGIIIUoQd1c1Z8L7ZpbawTbuKtpsUYtMFK/SlCr3Z+yU1gxWQpM1Mdm4/wBfrYw7YcW7pRka25dlZnUnFMpY82D3bbE9UbqK7j+3y3cVh8S1q4wsPfbK7BpF2TbUa6BTEjptWGWuzQKz0O17SLWp7i7JuK5QOBa0GFzHJrLA2DkPLPQsV7QrBVkXD3QAsWibizLWr1ti8LqIvEjL0FYFdKWlAWejN7UA1x3Nu7NzMhhlH1XeYkoo6ELeUSNzbBmhWfaQiBAthkNq2baMjBTlNvCqSxG5myduRUcq8+Vop2egTbPR7ftRVc+Sy4LZ92XQsbzIfVWuKf5TVba7c21+nfVXZxN17igOAvjtXbeS6I8ajvc0Dmq9KxReml5oBNm67Tdv1xWFvYYW3Vbjh1kg5W7+7cYmN5V1HqtWGJ9palw6WrlsqVVcjBSba38NchiDqStp0PI5xymvOQacTNMTkz0PEe0dGsNYNl8jLl94e73KpHpmDNHmK6/tKstce62GfOcuQKwVZt3MS6ZtzEX/ABRqSCRXn2frXG20ooSkzY9nu2aWMNaw5slslwXC4gMWXEWroA10UpbykdYO1QLPaZ7OJV7D3xhlvC73D3fCxDKzBlTwatsYPKs9buevzpwcb0US5M3fEO29hUv2LdnOjWu5FzNmOT6PctqwlVIYNcJPhGgI50U+1C0t0tbs3VUsGP1i5jN57lxTEDKcwAGvOa88e5pzoamhlqTLLjvEhfu94qlR3VpIOutqzbtk6dSk/Gq4kbDlTM1MkjWkFD2eKVCZhSoKoaK6dKVKkUdmugV2lTJYqbNKlSARanA0qVAMUTSza0qVMEcB1iujSlSoA6TSVyKVKl3EODUQmKVKqQmdOlc0iaVKglDRqJrhPKlSoKXIG42tMNw0qVSaISmlSpUAf//Z`
            },
            {
                id: 2, judul: `Roka si Batu Keras`, penulis: `Rima`,
                penerbit: `Mbak Barista`, tahun_rilis: 2822
            }
        ]
        setBuku(arrayBuku)

        setModalBuku(new Modal(document.getElementById(`modal_buku`)))
    }, [])

    let editBuku = buku => {
        // membuka modal
        modalBuku.show()
        setId(buku.id)
        setJudul(buku.judul)
        setPenulis(buku.penulis)
        setPenerbit(buku.penerbit)
        setTahunRilis(buku.tahun_rilis)
        setLinkGambar(buku.link_gambar)
        setAction(`edit`)
        setReadId(false)
    }

    let deleteBuku = buku => {
        if (window.confirm(`Apa anda yakin ingin menghapus data ini?`)) {
            // menaruh array buku ke "temp"
            let temp = [...Buku]

            // mencari index yang dipilih di array
            let index = temp.findIndex(books => books.id === buku.id)

            // menghapus data dari data yang ditemukan menurut index
            temp.splice(index, 1)

            // mengembalikan "temp" ke array buku
            setBuku(temp)
        }
    }

    let simpanBuku = () => {
        // menutup modal
        modalBuku.hide()

        if (action === `insert`) {
            let newData = {
                id: id, judul: judul, penulis: penulis,
                penerbit: penerbit, tahun_rilis: tahun_rilis,
                link_gambar: link_gambar
            }

            // menaruh array buku ke "temp"
            let temp = [...buku]

            // menambahkan data baru
            temp.push(newData)

            // mengembalikan "temp" ke array buku
            setBuku(temp)
        } else if (action === `edit`) {
            // menaruh array buku ke "temp"
            let temp = [...buku]

            // find index of selected data by ID
            let index = temp.findIndex(buku => buku.id === id)

            // update data based on founded index
            temp[index].judul = judul
            temp[index].penulis = penulis
            temp[index].penerbit = penerbit
            temp[index].tahun_rilis = tahun_rilis
            temp[index].link_gambar = link_gambar

            // restore to students from temp
            setBuku(temp)
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-header bg-warning">
                    <h3 className="text-white" align="middle">
                        <b>
                            List Buku
                        </b>
                    </h3>
                </div>
                <div className="card-body bg-dark">
                    {/* .map() -> fungsi dari array untuk scanning setiap data dalam array */}
                    {buku.map(book => (
                        <div className="row" key={`key${book.id}`}>
                            <div className="col-2">
                                <img src={book.gambar} height="300"/>
                            </div>
                            <div className="col-4">
                                <h5 className="text-white">Judul       : {book.judul}</h5>
                                <h5 className="text-white">Penulis     : {book.penulis}</h5>
                                <h5 className="text-white">Penerbit    : {book.penerbit}</h5>
                                <h5 className="text-white">Tahun Rilis : {book.tahun_rilis}</h5>
                            </div>

                            <div className="col-2">
                                <small>Action</small> <br />
                                <button className="btn btn-info mx-2" onClick={() => editBuku(book)}>
                                    Edit
                                </button>
                                <button className="btn btn-outline-danger" onClick={() => deleteBuku(book)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>
                                        Form Buku
                                    </h4>
                                </div>
                                <div className="modal-body">
                                    ID
                                    <input type={`number`} className="form-control mb-2"
                                        value={id}
                                        onChange={ev => setId(ev.target.value)} />

                                    Judul
                                    <input type={`text`} className="form-control mb-2"
                                        value={judul}
                                        onChange={ev => setJudul(ev.target.value)} />

                                    Penulis
                                    <input type={`text`} className="form-control mb-2"
                                        value={penulis}
                                        onChange={ev => setPenulis(ev.target.value)} />
                                    
                                    Penerbit
                                    <input type={`text`} className="form-control mb-2"
                                        value={penerbit}
                                        onChange={ev => setPenerbit(ev.target.value)} />

                                    Tahun Rilis 
                                    <input type={`number`} className="form-control mb-2"
                                        value={tahun_rilis}
                                        onChange={ev => setTahunRilis(ev.target.value)} />

                                    <button className="btn btn-info" onClick={() => simpanBuku()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of modal */}
                </div>
            </div>
        </div>
    )
}