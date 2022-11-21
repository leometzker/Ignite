import { PostStyled } from './styles/PostStyled'

export const Post = () => {
  return (
    <PostStyled>
      <div className="postContainer">
        <header>
          <nav>
            <a href="/">VOLTAR</a> <a href="">VER NO GITHUB</a>
          </nav>
          <h1>header</h1>
          <div className="info"></div>
        </header>

        <main>
          <h4>titulo</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora voluptate sequi vel totam voluptatum omnis voluptatem hic,
            itaque aliquid iure officiis dolor repudiandae velit doloremque
            perspiciatis aliquam ullam ab?
          </p>
          <br />

          <h4>titulo</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora voluptate sequi vel totam voluptatum omnis voluptatem hic,
            itaque aliquid iure officiis dolor repudiandae velit doloremque
            perspiciatis aliquam ullam ab?
          </p>
          <br />

          <h4>titulo</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora voluptate sequi vel totam voluptatum omnis voluptatem hic,
            itaque aliquid iure officiis dolor repudiandae velit doloremque
            perspiciatis aliquam ullam ab?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            tempora voluptate sequi vel totam voluptatum omnis voluptatem hic,
            itaque aliquid iure officiis dolor repudiandae velit doloremque
            perspiciatis aliquam ullam ab?
          </p>
          <div className="exemple">Ex</div>
        </main>
      </div>
    </PostStyled>
  )
}
